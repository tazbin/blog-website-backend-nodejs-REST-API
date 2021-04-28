## Comment to blog
To make a comment to a particular blog

**URL**: `localhost:3000/blog/comment`

**Method**: `POST`

**Authentication**: Required

## Request body
**Required fields:** `blogId`, `body`

**Optional fields:**

**Data**:
```bash
{
    "blogId": "606f2b0e17586e3480477137",
    "body": "This is my comment"
}
```

## Success response
**Code**: `200 OK`

**Content**:
```bash
{
    "reacts": {
        "like": [
            "6069c94d7f65a454540d1384",
            "606efbba17e43a04cce0286d"
        ],
        "love": [],
        "funny": [],
        "sad": [],
        "informative": []
    },
    "posted": "08 Apr 2021",
    "_id": "606f2b0e17586e3480477137",
    "title": "my first blog",
    "category": {
        "_id": "6069c9807f65a454540d1386",
        "name": "tech"
    },
    "body": "This is my demo blog...",
    "writter": {
        "joined": "08 Apr 2021",
        "_id": "606efbba17e43a04cce0286d",
        "first_name": "Tazbinur",
        "last_name": "Rahaman"
    },
    "comments": [
        {
            "time": "09 Apr 2021",
            "_id": "606fef54a49e5c4958dc14da",
            "people": {
                "_id": "606efbba17e43a04cce0286d",
                "first_name": "Tazbinur",
                "last_name": "Rahaman"
            },
            "body": "kire mama ki khobor"
        },
        {
            "time": "09 Apr 2021",
            "_id": "606fef64a49e5c4958dc14db",
            "people": {
                "_id": "606efbba17e43a04cce0286d",
                "first_name": "Tazbinur",
                "last_name": "Rahaman"
            },
            "body": "bro whats up?"
        },
        {
            "time": "28 Apr 2021",
            "_id": "6089c40ddfe5685294ab6327",
            "people": {
                "_id": "606efbba17e43a04cce0286d",
                "first_name": "Tazbinur",
                "last_name": "Rahaman"
            },
            "body": "This is my comment"
        }
    ],
    "__v": 190
}
```

## Error response
**Condition**: If any of required fields is absent, invalid `blogId` or `accessToken` is absent

**Code**: `400 Bad Request`

**Content**:
```bash
{
    "error": {
        "status": 400,
        "message": "Invalied blogId"
    }
}
```