from sqlalchemy.orm import Session
from backend.database.models import Project, Review, User
from backend.database import schemas
from sqlalchemy import insert

def get_all_projects(db: Session) -> list[Project]:
    return db.query(Project).all()

def get_project(db: Session, project_id: int) -> Project:
    return db.query(Project).filter(Project.id == project_id).first()

def create_review(db: Session, review: schemas.ReviewCreate, project_id: int):
    db_user = db.query(User).filter(User.address == review.address).first()
    if not db_user:
        db_user = User(address=review.address)
        db.add(db_user)
        db.commit()
        db.refresh(db_user)

    db_review = Review(text=review.text, score=review.score, project_id=project_id, user_id=db_user.id)
    db.add(db_review)
    db.commit()
    db.refresh(db_review)
    return db_review
