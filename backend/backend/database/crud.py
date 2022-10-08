from sqlalchemy.orm import Session
from backend.database.models import Project, Review, User
from sqlalchemy import insert

def get_all_projects(db: Session) -> list[Project]:
    return db.query(Project).all()

def get_project(db: Session, project_id: int) -> Project:
    return db.query(Project).filter(Project.id == project_id).first()

def create_review(db: Session, review: schemas.ReviewCreate, project_id: int):
    user = db.query(User).filter(User.address == review.address).first()
    # user = db.get(User, address=review.address)
    if not user:
        user = models.User(address=review.address)
        print(dir(user))
        # user = insert(users).values(address=review.address)
        user = db.add(user)

    db_review = models.Review(text=review.text, score=review.score, project_id=project_id, user_id=user.id)
    db.add(db_review)
    db.commit()
    db.refresh(db_review)
    return db_review

stmt = insert(user_table).values(name="spongebob", fullname="Spongebob Squarepants")