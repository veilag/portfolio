from fastapi import FastAPI

app = FastAPI()


@app.get("/")
async def handle_index():
    return {
        "message": "hello, world"
    }
