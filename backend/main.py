
from fastapi import FastAPI, Depends
from sqlalchemy.orm import Session

from backend.database import crud, schemas
from backend.database.models import get_db, Project, Base, engine

Base.metadata.create_all(bind=engine)

app = FastAPI()

# project list
@app.get("/projects", response_model=list[schemas.Project])
def read_projects(db: Session = Depends(get_db)):
    return crud.get_all_projects(db)

# project detail
@app.get("/project/{project_id}", response_model=schemas.Project)
def read_project(project_id: int, db: Session = Depends(get_db)):
    return crud.get_project(db, project_id)

# create review
@app.post("/project/{project_id}/create_review", response_model=schemas.Review)
def create_review(project_id: int, review: schemas.ReviewCreate, db: Session = Depends(get_db)):
    return crud.create_review(db, review, project_id)