from pydantic import BaseModel

class User(BaseModel):
    id: int
    address: str

    class Config:
        orm_mode = True

class Review(BaseModel):
    text: str
    score: int
    user: User

    class Config:
        orm_mode = True

class Project(BaseModel):
    id: int
    name: str
    slug: str
    reviews: list[Review]

    class Config:
        orm_mode = True