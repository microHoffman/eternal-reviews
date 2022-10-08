
from fastapi import FastAPI, Depends
from sqlalchemy.orm import Session

from backend.database import crud, schemas
from backend.database.models import get_db, Project, Base, engine

app = FastAPI()

# project list
@app.get("/projects", response_model=list[schemas.Project])
def read_projects(db: Session = Depends(get_db)):
    return crud.get_all_projects(db)

# project detail
@app.get("/project/{project_id}", response_model=schemas.Project)
def read_project_reviews(project_id: int, db: Session = Depends(get_db)):
    return crud.get_project(db, project_id)