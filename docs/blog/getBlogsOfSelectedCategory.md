## Get blogs of a category
To get list of blogs of a particular category with information & pagination. 6 blogs in each page.

**URL**: `localhost:3000/blog/category/:categoryId?page=:pageNumber`

**Method**: `GET`

**Authentication**: Not required

## Request body
**Required fields:** `categoryId`

**Optional fields:** `pageNumber` (query params: default is 1)

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
            "img": "http://localhost:3000/uploads\\blogs\\1620377411846.jpg",
            "posted": "07 May 2021",
            "_id": "6094ff438c2e3c15b4d3cba8",
            "title": "Travelling tips with budget money",
            "category": {
                "_id": "6094fb838c2e3c15b4d3cba0",
                "name": "tours & travels"
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
            "img": "http://localhost:3000/uploads/blogs/1620654888979.jpg",
            "posted": "10 May 2021",
            "_id": "60993b2e48e2930015410235",
            "title": "Gramer bari te shorisha ful er bagan e ekdin",
            "category": {
                "_id": "6094fb838c2e3c15b4d3cba0",
                "name": "tours & travels"
            },
            "writter": {
                "joined": "08 May 2021",
                "_id": "609656cc3bfe280015a45d07",
                "first_name": "Rakibul",
                "last_name": "Islam"
            },
            "comments": []
        }
    ],
    "totalBlogs": 3,
    "totalPages": 1,
    "currentPage": 1
}
```

## Error response
**Condition**: 

**Code**:

**Content**:
```bash

```