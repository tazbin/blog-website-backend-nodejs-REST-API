## Login
To login a user, collect loggedin user data & tokens

**URL**: `localhost:5000/user/login`

**Methods**: `POST`

**Methods**: `POST`

## Request body
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
    "accessToken": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpYXQiOjE2MTk2MzIyOTMsImV4cCI6MTYxOTcxODY5MywiYXVkIjoiXCI2MDZlZmJiYTE3ZTQzYTA0Y2NlMDI4NmRcIiIsImlzcyI6InRhemJpbnVyLmluZm8ifQ.7rVBalqvhkU2HcXEH79422yN4TL54pO2vJkQ21J6kzQ",
    "refreshToken": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpYXQiOjE2MTk2MzIyOTMsImV4cCI6MTYxOTcxODY5MywiYXVkIjoiXCI2MDZlZmJiYTE3ZTQzYTA0Y2NlMDI4NmRcIiIsImlzcyI6InRhemJpbnVyLmluZm8ifQ.eo5KzLFR_jxgvpXVC-dYSMdSlZ1R_Kd3lxph4N8IFbg"
}
```

## Error response
**Condition**: If 'email' or 'password' is wrong or any one is absent.

**Code**: `401 Bad Request`

Content:
```bash
{
    "error": {
        "status": 401,
        "message": "Incorrect email or password"
    }
}
```