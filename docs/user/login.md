## Login
To login a user, collect loggedin user data & tokens

**URL**: `localhost:5000/user/login`

**Method**: `POST`

**Authentication**: Not required

## Request body
**Required fields:** `email`, `password`

**Optional fields:** 

**Data**:
```bash
{
    "email": "t@gmail.com",
    "password": "123"
}
```

## Success response
**Code**: `200 OK`

**Content**:
```bash
{
    "user": {
        "_id": "606efbba17e43a04cce0286d",
        "first_name": "Tazbinur",
        "role": "blogger"
    },
    "accessToken": "eyJhbGciOiJIUzI1NiIsInR...TL54pO2vJkQ21J6kzQ",
    "refreshToken": "eyJhbGciOiJIUzI1NiIsInR...SlZ1R_Kd3lxph4N8IFbg"
}
```

## Error response
**Condition**: If any of the required fields is absent, `email` or `password` is wrong.

**Code**: `401 Unauthorized`

**Content**:
```bash
{
    "error": {
        "status": 401,
        "message": "Incorrect email or password"
    }
}
```