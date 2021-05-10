## Get details of a blog
To get detailed content of a particular blog

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
            "609655be3bfe280015a45d04",
            "609656cc3bfe280015a45d07"
        ],
        "love": [],
        "funny": [],
        "sad": [],
        "informative": []
    },
    "img": "http://localhost:3000/uploads\\blogs\\1620377310963.png",
    "posted": "07 May 2021",
    "_id": "6094fede8c2e3c15b4d3cba7",
    "title": "Designing a cover photo with MS PowerPoint",
    "category": {
        "_id": "6094fb9a8c2e3c15b4d3cba2",
        "name": "skill development"
    },
    "body": "Lorem Ipsum is simply dummy text ...",
    "writter": {
        "joined": "07 May 2021",
        "_id": "6094fafc8c2e3c15b4d3cb9d",
        "first_name": "Tazbinur",
        "last_name": "Rahaman"
    },
    "comments": [
        {
            "time": "08 May 2021",
            "_id": "6096562d3bfe280015a45d05",
            "people": {
                "img": "uploads/1620654288692.jpg",
                "_id": "609655be3bfe280015a45d04",
                "first_name": "Imtiaz",
                "last_name": "Ahmed"
            },
            "body": "Wow! I didn't know MS powerpoint can do that much things!"
        },
        {
            "time": "08 May 2021",
            "_id": "609657a43bfe280015a45d08",
            "people": {
                "img": "uploads/1620654239923.jpg",
                "_id": "609656cc3bfe280015a45d07",
                "first_name": "Rakibul",
                "last_name": "Islam"
            },
            "body": "Thanks for sharing, very informative..."
        }
    ],
    "__v": 8
}
```

## Error response
**Condition**: 

**Code**:

**Content**:
```bash

```