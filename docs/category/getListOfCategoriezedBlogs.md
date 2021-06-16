## Get list of all categorized blog counts of user
To get a list of all categories & number of blogs of each category of  a user

**URL**: `GET localhost:3000/category/categorizedBlogs/:bloggerId`

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
[
    {
        "_id": "6069c9807f65a454540d1386",
        "name": "tech",
        "count": 6
    },
    {
        "_id": "6069c9857f65a454540d1387",
        "name": "medical",
        "count": 5
    },
    {
        "_id": "6069c98a7f65a454540d1388",
        "name": "travel",
        "count": 11
    },
    {
        "_id": "6089b67fdfe5685294ab631c",
        "name": "education",
        "count": 0
    }
]
```

## Error response
**Condition**:

**Code**: 

**Content**:
```bash

```