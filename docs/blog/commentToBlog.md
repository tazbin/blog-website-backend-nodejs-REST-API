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
            "609655be3bfe280015a45d04",
            "609656cc3bfe280015a45d07",
            "6094fafc8c2e3c15b4d3cb9d"
        ],
        "love": [],
        "funny": [],
        "sad": [],
        "informative": []
    },
    "img": "uploads\\blogs\\1620377310963.png",
    "posted": "07 May 2021",
    "_id": "6094fede8c2e3c15b4d3cba7",
    "title": "Designing a cover photo with MS PowerPoint",
    "category": {
        "_id": "6094fb9a8c2e3c15b4d3cba2",
        "name": "skill development"
    },
    "body": "Lorem Ipsum is simply dummy ...",
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
        },
        {
            "time": "11 May 2021",
            "_id": "609982820ddd122710b48596",
            "people": {
                "img": "uploads/1620654328698.png",
                "_id": "6094fafc8c2e3c15b4d3cb9d",
                "first_name": "Tazbinur",
                "last_name": "Rahaman"
            },
            "body": "This is my comment"
        }
    ],
    "__v": 10
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