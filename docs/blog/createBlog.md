## Create blog
To create a new blog

**URL**: `localhost:3000/blog`

**Method**: `POST`

**Authentication**: Required

## Request body
**Required fields:** `title`, `body`, `category`

**Optional fields:**

**Data**:
```bash
{
    "title": "How to write API documentation",
    "category": "6069c9807f65a454540d1386",
    "body": "To write a documentation..."
}
```

## Success response
**Code**: `200 OK`

**Content**:
```bash
{
    "reacts": {
        "like": [],
        "love": [],
        "funny": [],
        "sad": [],
        "informative": []
    },
    "posted": "28 Apr 2021",
    "_id": "6089ba31dfe5685294ab6323",
    "title": "How to write API documentation",
    "category": {
        "_id": "6069c9807f65a454540d1386",
        "name": "tech"
    },
    "body": "To write a documentation...",
    "writter": {
        "joined": "08 Apr 2021",
        "_id": "606efbba17e43a04cce0286d",
        "first_name": "Tazbinur",
        "last_name": "Rahaman"
    },
    "comments": [],
    "__v": 0
}
```

## Error response
**Condition**: If any of the required fields is absent or `accessToken` is absent

**Code**: `500 Internal Server Error`

**Content**:
```bash
{
    "error": {
        "status": 500,
        "message": "Blog validation failed: body: Path `body` is required."
    }
}
```