## Get bloggers info
To get registered blogger's detail information

**URL**: `localhost:3000/user/bloggerProfile/:bloggerId`

**Method**: `GET`

**Authentication**: Not required

## Request body

**Required fields:** `bloggerId` (query params)

**Optional fields:** 

**Data**:
```bash

```

## Success response
**Code**: `200 OK`

**Content**:
```bash
{
    "role": "blogger",
    "joined": "08 Apr 2021",
    "_id": "606efbba17e43a04cce0286d",
    "first_name": "Tazbinur",
    "last_name": "Rahaman",
    "email": "t@gmail.com",
    "about": "I am a node js developer",
    "address": "Jashore",
    "job": "Software engineer",
    "img": "data:image/jpeg;base64,/9j/4AAQSk...n8ln48v/0lf//Z"
}
```

## Error response
**Condition**: If `bloggerId` is invalid

**Code**: `400 Bad Request`

**Content**:
```bash
{
    "error": {
        "status": 400,
        "message": "Invalid bloggerId"
    }
}
```