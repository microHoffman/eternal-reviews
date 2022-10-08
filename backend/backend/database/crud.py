from sqlalchemy.orm import Session
from backend.database.models import Project, Review

def get_all_projects(db: Session) -> list[Project]:
    return db.query(Project).all()

def get_project(db: Session, project_id: int) -> Project:
    return db.query(Project).filter(Project.id == project_id).first()