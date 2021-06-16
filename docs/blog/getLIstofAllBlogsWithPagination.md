## Get list of all blogs with pagination of certain category of a user
To get the list of all blogs of certain category of a user with information & with pagination. 6 blogs each page. BloggerId & categoryId both set to `all` returns all the blogs of all categories. 

**URL**: `localhost:3000/blog/:bloggerId?/:categoryId?`

**Method**: `GET`

**Authentication**: Not required

## Request body
**Required fields:** `bloggerId`, `categoryId` (req params)

**Optional fields:** `page` (query params: default is 1)

**Data**:
```bash

```

## Success response
**Code**: `200 OK`

**Content**:
```bash
{
    "result": [
        {
            "img": "http://localhost:3000/uploads\\blogs\\1620377310963.png",
            "posted": "07 May 2021",
            "_id": "6094fede8c2e3c15b4d3cba7",
            "title": "Designing a cover photo with MS PowerPoint",
            "category": {
                "_id": "6094fb9a8c2e3c15b4d3cba2",
                "name": "skill development"
            },
            "writter": {
                "joined": "07 May 2021",
                "_id": "6094fafc8c2e3c15b4d3cb9d",
                "first_name": "Tazbinur",
                "last_name": "Rahaman"
            },
            "comments": [
                {
                    "people": {
                        "img": "uploads/1620654288692.jpg",
                        "_id": "609655be3bfe280015a45d04",
                        "first_name": "Imtiaz",
                        "last_name": "Ahmed"
                    }
                },
                {
                    "people": {
                        "img": "uploads/1620654239923.jpg",
                        "_id": "609656cc3bfe280015a45d07",
                        "first_name": "Rakibul",
                        "last_name": "Islam"
                    }
                }
            ]
        },
        ...
        {
            "img": "http://localhost:3000/uploads\\blogs\\1620377835812.jpg",
            "posted": "07 May 2021",
            "_id": "609500eb8c2e3c15b4d3cbac",
            "title": "RUET ECE16 series landed to their final year of graduation",
            "category": {
                "_id": "6094fb8f8c2e3c15b4d3cba1",
                "name": "motivational"
            },
            "writter": {
                "joined": "07 May 2021",
                "_id": "6094fafc8c2e3c15b4d3cb9d",
                "first_name": "Tazbinur",
                "last_name": "Rahaman"
            },
            "comments": []
        }
    ],
    "totalBlogs": 7,
    "totalPages": 2,
    "currentPage": 1
}
```

## Error response
**Condition**:  If bloggerId, CategoryId or both are invalied

**Code**: `400 Bad Request`

**Content**:
```bash
    "error": {
        "status": 400,
        "message": "Invalied Id provided"
    }
```