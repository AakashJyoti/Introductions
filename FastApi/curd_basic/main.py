from fastapi import FastAPI
from pydantic import BaseModel
from typing import List
import uvicorn

app = FastAPI()


class Tea(BaseModel):
    id: int
    name: str
    origin: str


teas: List[Tea] = []


@app.get("/")
def read_root():
    return {"message", "Welcome to tea house."}


@app.get("/teas")
def get_teas():
    return teas


@app.post("/teas")
def add_tea(tea: Tea):
    teas.append(tea)
    return {"meaasge": "tea added successfully"}


@app.put("/teas/{tea_id}")
def update_tea(tea_id: int, updated_tea: Tea):
    for index, tea in enumerate(teas):
        if tea.id == tea_id:
            teas[index] = updated_tea
            return {"message": "Tea updation successfully"}
    return {"error": "Tea not found"}


@app.delete("/teas/{tea_id}")
def delete_tea(tea_id):
    for index, tea in enumerate(teas):
        if tea.id == tea_id:
            teas.pop(index)
            return {"message": "Tea deletion successfully"}
    return {"error": "Tea not found"}


def main():
    uvicorn.run(app, host="0.0.0.0", port=8000)


if __name__ == "__main__":
    main()
