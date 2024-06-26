import random, requests
from datetime import datetime
from fastapi import FastAPI, HTTPException, Query
from fastapi.middleware.cors import CORSMiddleware
from sqlalchemy import create_engine, MetaData, Table, Column, Integer, String, insert, select, delete, text

url = "http://localhost:8080"

app = FastAPI()

categories = [
    "Production",
	"Sustainability",
	"Maintenance",
	"HSE",
	"Social-Activities",
	"Security",
]

origins = [
    "http://localhost:8000",
    "localhost:8000"
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    # allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

DATABASE_URL = "mssql+pyodbc://DESKTOP-O2AULN6/IOC_DB?driver=ODBC+Driver+17+for+SQL+Server"
engine = create_engine(DATABASE_URL)

metadata = MetaData()
# my_table = Table("Category", metadata, autoload_with=engine)
# table = Table(
#     'Category', 
#     metadata, 
#     autoload=True, 
#     autoload_with=engine
# )
# # Create table if not exists
# metadata.create_all(engine)

@app.get("/", tags=["root"])
async def readRoot() -> dict:
    return {"message": "Hello World!!"}


@app.get("/chatbot")
async def pingChatbot(prompt: str) -> dict:
    params = {"text": prompt}
    res = requests.get(url, params=params).json()
    # # print(res["output"])
    # # print(prompt)
    return res

def getDataFromDB(process, kpi, label, fun="AVG"):
    dateLabels = [
        "Second",
        "Minute",
        "Hour",
        "Day",
        "Month",
        "Year",
    ]
    queryStr1 = ', '.join(dateLabels[dateLabels.index(label):][::-1])
    queryStr2 = ', '.join(map(lambda x: x + " DESC", dateLabels[dateLabels.index(label):][::-1]))
    queryStr3 = ', '.join(map(lambda x: f"DATEPART({x.upper()}, dateKPI) AS {x}", dateLabels[dateLabels.index(label):][::-1]))
    queryStr4 = ', '.join(map(lambda x: f"DATEPART({x.upper()}, dateKPI)", dateLabels[dateLabels.index(label):][::-1]))
    requestQuery = f'''
    WITH RecursiveProcess AS (
        SELECT idProcess, nameProcess, idParent
        FROM Process
        WHERE idProcess = '{process}'
        UNION ALL
        SELECT p.idProcess, p.nameProcess, p.idParent
        FROM Process p
        INNER JOIN RecursiveProcess rp ON p.idParent = rp.idProcess
    ),
    LatestKPIs AS (
        SELECT 
            {queryStr3},
            idProcess,
            nameKPI,
            {fun}(valueKPI) AS {fun.capitalize()}ValueKPI
        FROM KPI
        WHERE idProcess IN (SELECT idProcess FROM RecursiveProcess)
        GROUP BY
            {queryStr4},
            idProcess,
            nameKPI
    ),
    FilteredKPIs AS (
        SELECT 
            {queryStr1},
            idProcess,
            {fun.capitalize()}ValueKPI,
            ROW_NUMBER() OVER (PARTITION BY idProcess ORDER BY {queryStr2}) AS rn
        FROM LatestKPIs
        WHERE nameKPI = '{kpi}'
    )
    SELECT 
        {queryStr1},
        {fun}({fun.capitalize()}ValueKPI) AS Final{fun.capitalize()}ValueKPI
    FROM FilteredKPIs
    WHERE rn <= 10
    GROUP BY {queryStr1}
    ORDER BY {queryStr2};
    '''
    # print(requestQuery)
    try:
        with engine.connect() as connection:
            queryResults = [[*x] for x in connection.execute(text(requestQuery))][::-1]
            values = [x[-1] for x in queryResults]
            labels = [datetime(*x[: -1]).strftime("%Y-%m-%d %H:%M:%S") for x in queryResults]
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))
    return values, labels


@app.get("/categories/Production")
async def fetchKPI(process: str):
    results = {}
    production_KPIs = [
        "Product Quality",
        "Labor Productivity",
        "Labor Productivity Cost",
        "Operating Cost/Ton",
        "Availability",
        "Performance",
        "Quality",
        "Production Target"
    ]
    for kpi in production_KPIs:
        data, labels = getDataFromDB(process, kpi, "Second")
        results[kpi] = {
            "labels": labels,
            "data": data,
        }

    return results

@app.get("/categories/Sustainability")
async def fetchKPI(process: str):
    results = {}
    sustainability_KPIs = [
        "Carbon Footprint",
        "Specific Electricity Consumption",
        "Specific Water Consumption",
        "Specific Fuel Consumption"
    ]
    for kpi in sustainability_KPIs:
        data, labels = getDataFromDB(process, kpi, "Second", "SUM")
        results[kpi] = {
            "labels": labels,
            "datasets": [
                {
                    "label": kpi,
                    "data": data,
                    "borderColor": "rgb(255, 99, 132)",
                    "backgroundColor": "rgba(255, 99, 132, 0.5)",
                }
            ],
            
        }

    return results

@app.get("/categories/Asset-Performance")
async def fetchKPI(process: str):
    results = {}
    maintenance_KPIs = [
        "OEE",
        "Asset Availability",
        "Equipment Failures/Day",
        "MTBF",
        "MTTR",
        "MDT",
        "MMH",
        "Maintenance Ratio",
        "Maintenance Cost",
        # "Maintenance Duration",
    ]
    for kpi in maintenance_KPIs:
        data, labels = getDataFromDB(process, kpi, "Second")
        results[kpi] = {
            "labels": labels,
            "datasets": [
                {
                    "label": kpi,
                    "data": data,
                    "borderColor": "rgb(53, 162, 235)",
                    "backgroundColor": "rgba(53, 162, 235, 0.25)",
                    "fill": True,
                }
            ],
            
        }

    return results


@app.get("/machines")
async def fetchKPI(process: str):
    requestQuery = f'''
    WITH RecursiveProcess AS (
        SELECT idProcess, nameProcess, idParent
        FROM Process
        WHERE idProcess = '{process}'
        UNION ALL
        SELECT p.idProcess, p.nameProcess, p.idParent
        FROM Process p
        INNER JOIN RecursiveProcess rp ON p.idParent = rp.idProcess
    )
    SELECT 
        idMachine,
        nameMachine, 
        latitudeMachine, 
        longitudeMachine, 
        statusMachine, 
        idProcess
    FROM Machine
    WHERE idProcess IN (SELECT idProcess FROM RecursiveProcess)
    '''

    try:
        with engine.connect() as connection:
            queryResults = [[*x] for x in connection.execute(text(requestQuery))]
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))
    return {"machines": queryResults}
