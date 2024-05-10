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


@app.get("/chatbot")
async def readItem(prompt: str) -> dict:
    # print(prompt)
    # prompt = ' '.join(prompt.split('+'))
    params = {"text": prompt}
    res = requests.get(url, params=params).json()
    # # print(res["output"])
    # # print(prompt)
    return res