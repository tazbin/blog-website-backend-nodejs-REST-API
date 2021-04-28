## Get details of a blog
To get details content of a particular blog

**URL**: `localhost:3000/blog/:blogId`

**Method**: `GET`

**Authentication**: Not required

## Request body
**Required fields:** `blogId`

**Optional fields:**

**Data**:
```bash

```

## Success response
**Code**: `200 OK`

**Content**:
```bash
{
    "reacts": {
        "like": [
            "6069c94d7f65a454540d1384"
        ],
        "love": [
            "606efbba17e43a04cce0286d"
        ],
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
            "body": "Hey, nice blog"
        },
        {
            "time": "09 Apr 2021",
            "_id": "606fef64a49e5c4958dc14db",
            "people": {
                "_id": "606efbba17e43a04cce0286d",
                "first_name": "Tazbinur",
                "last_name": "Rahaman"
            },
            "body": "I leanrd many things from this blog"
        },
        {
            "time": "09 Apr 2021",
            "_id": "6070505278eced1bf44df340",
            "people": {
                "_id": "606ff3cba49e5c4958dc14dc",
                "first_name": "Khalid",
                "last_name": "Syfullah"
            },
            "body": "Kemon achis bhai?"
        }
    ],
    "__v": 181
}
```

## Error response
**Condition**: 

**Code**:

**Content**:
```bash

```