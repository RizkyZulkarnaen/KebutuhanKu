import uuid

from pydantic import EmailStr
from sqlmodel import Field, SQLModel, Relationship

class UserBase(SQLModel):
    email: EmailStr = Field(unique=True, index=True, max_length=250)
    is_active: bool = True
    full_name: str = Field(max_length=250)

class UserRegister(UserBase):
    password: str = Field(min_length=8, max_length=40)

class UserUpdate(UserBase):
    email: EmailStr | None = Field(default=None,max_length=250)
    password: str | None = Field(default=None, min_length=8, max_length=40)