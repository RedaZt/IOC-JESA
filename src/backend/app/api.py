from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
import requests

url = "http://localhost:8080"

app = FastAPI()

origins = [
    "http://localhost:8000",
    "localhost:8000"
]


app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    # allow_credentials=True,
    # allow_methods=["*"],
    # allow_headers=["*"],
)


@app.get("/", tags=["root"])
async def readRoot() -> dict:
    return {"message": "Hello World!!"}


@app.get("/{params}")
async def readItem(params) -> dict:
    prompt = ' '.join(params.split("prompt=", 1)[-1].split('+'))
    params = {"text": prompt}
    res = requests.get(url, params=params).json()
    # print(res["output"])
    # print(prompt)
    return res