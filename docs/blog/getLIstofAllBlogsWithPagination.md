## Get list of All blogs with pagination
To get the list of all blogs with information & with pagination. 3 blogs each page.

**URL**: `localhost:3000/blog?page=:pageNumber`

**Method**: `GET`

**Authentication**: Not required

## Request body
**Required fields:**

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
            "posted": "08 Apr 2021",
            "_id": "606f2b0e17586e3480477137",
            "title": "my first blog",
            "category": {
                "_id": "6069c9807f65a454540d1386",
                "name": "tech"
            },
            "writter": {
                "joined": "08 Apr 2021",
                "_id": "606efbba17e43a04cce0286d",
                "first_name": "Tazbinur",
                "last_name": "Rahaman"
            },
            "comments": [
                {
                    "people": {
                        "_id": "606efbba17e43a04cce0286d",
                        "first_name": "Tazbinur",
                        "last_name": "Rahaman"
                    }
                },
                {
                    "people": {
                        "_id": "606efbba17e43a04cce0286d",
                        "first_name": "Tazbinur",
                        "last_name": "Rahaman"
                    }
                },
                {
                    "people": {
                        "_id": "606ff3cba49e5c4958dc14dc",
                        "first_name": "Khalid",
                        "last_name": "Syfullah"
                    }
                },
                {
                    "people": {
                        "_id": "606ff3cba49e5c4958dc14dc",
                        "first_name": "Khalid",
                        "last_name": "Syfullah"
                    }
                },
                {
                    "people": {
                        "_id": "606ff3cba49e5c4958dc14dc",
                        "first_name": "Khalid",
                        "last_name": "Syfullah"
                    }
                },
                {
                    "people": {
                        "_id": "606efbba17e43a04cce0286d",
                        "first_name": "Tazbinur",
                        "last_name": "Rahaman"
                    }
                },
                {
                    "people": {
                        "_id": "606efbba17e43a04cce0286d",
                        "first_name": "Tazbinur",
                        "last_name": "Rahaman"
                    }
                }
            ]
        },
        {
            "posted": "08 Apr 2021",
            "_id": "606f2b1e17586e3480477138",
            "title": "my second blog",
            "category": {
                "_id": "6069c9807f65a454540d1386",
                "name": "tech"
            },
            "writter": {
                "joined": "08 Apr 2021",
                "_id": "606efbba17e43a04cce0286d",
                "first_name": "Tazbinur",
                "last_name": "Rahaman"
            },
            "comments": []
        },
        {
            "posted": "08 Apr 2021",
            "_id": "606f2b2317586e3480477139",
            "title": "my third blog",
            "category": {
                "_id": "6069c9807f65a454540d1386",
                "name": "tech"
            },
            "writter": {
                "joined": "08 Apr 2021",
                "_id": "606efbba17e43a04cce0286d",
                "first_name": "Tazbinur",
                "last_name": "Rahaman"
            },
            "comments": []
        }
    ],
    "totalBlogs": 24,
    "totalPages": 8,
    "currentPage": 1
}
```

## Error response
**Condition**: 

**Code**:

**Content**:
```bash

```