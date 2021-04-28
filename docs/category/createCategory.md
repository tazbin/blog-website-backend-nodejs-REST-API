## Create a new category
To create a new category

**URL**: `localhost:3000/category`

**Method**: `POST`

**Authentication**: Required

## Request body
**Required fields:** `name`

**Optional fields:**

**Data**:
```bash
{
    "name": "Education"
}
```

## Success response
**Code**: `200 OK`

**Content**:
```bash
{
    "_id": "6089b67fdfe5685294ab631c",
    "name": "education",
    "__v": 0
}
```

## Error response
**Condition**: If any of the required params is absent or the `accessToken` is absent.

**Code**: `500 Internal Server Error`

**Content**:
```bash
{
    "error": {
        "status": 500,
        "message": "Category validation failed: name: Path `name` is required."
    }
}
```