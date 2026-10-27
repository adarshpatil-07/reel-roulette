from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

app = FastAPI(title="Reel Roulette API")

app.add_middleware(
    CORSMiddleware,
    allow_origins=[
        "http://127.0.0.1:5500",
        "http://localhost:5500",
    ],
    allow_methods=["*"],
    allow_headers=["*"],
)


@app.get("/")
def home():
    return {
        "message": "Reel Roulette API is running!"
    }


@app.get("/api/movies/trending")
def trending_movies():
    return {
        "message": "TMDB API key not configured yet",
        "movies": []
    }


@app.get("/api/movies/search")
def search_movies(query: str = ""):
    return {
        "query": query,
        "movies": []
    }
