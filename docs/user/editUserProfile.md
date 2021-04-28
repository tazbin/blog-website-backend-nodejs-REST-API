## Edit user profile
To update/edit a registered user's information

**URL**: `localhost:3000/user/editProfile`

**Method**: `PUT`

**Authentication**: Required

## Request body

**Required fields:** `email`, `first_name`, `last_name`

**Optional fields:** `job`, `address`, `about`

**Data**:
```bash
{
    "email": "t@gmail.com",
    "first_name": "Tazbinur",
    "last_name": "Rahaman",
    "job": "Software engineer",
    "address": "Jashore",
    "about": "I am a node js developer"
}
```

## Success response
**Code**: `200 OK`

**Content**:
```bash
{
    "role": "blogger",
    "_id": "606efbba17e43a04cce0286d",
    "first_name": "Tazbinur"
}
```

## Error response
**Condition**: If any of the required fields is absent, `accessToken` is absent.

**Code**: `500 Internal Server Error`

**Content**:
```bash
{
    "error": {
        "status": 500,
        "message": "\"first_name\" is required"
    }
}
```