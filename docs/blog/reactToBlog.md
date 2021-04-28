## React to blog
To react, change react, remove react to/ from a particular blog

**URL**: `localhost:3000/blog/react`

**Method**: `PUT`

**Authentication**: Required

## Request body
**Required fields:** `blogId`, `reactName`

**Optional fields:**

**Data**:
```bash
{
    "blogId": "606f2b0e17586e3480477137",
    "reactName": "like"
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
        }
    ],
    "__v": 189
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