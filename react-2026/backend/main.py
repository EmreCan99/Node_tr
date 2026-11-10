from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

app = FastAPI()


app.add_middleware(
    CORSMiddleware,
    allow_origins=[""
        "http://localhost:5173",
        "https://ilkapp.onrender.com"
    ],
    allow_methods=["*"],
    allow_headers=["*"],
)


@app.get("/")
def welcome():
   return {
        "message": "Doğru geldin"
    }





@app.get("/api/check")
def check():
   return {
        "what": "the backend check",
        "status": "alive"
    }


