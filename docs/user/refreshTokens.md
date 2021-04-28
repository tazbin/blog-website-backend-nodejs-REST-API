## Refresh tokens
To refresh tokens & generate new pair of accessToken, refreshToken

**URL**: `localhost:3000/user/me/refresToken`

**Method**: `POST`

**Authentication**: Required

## Request body

**Required fields:** `refreshToken`

**Optional fields:**

**Data**:
```bash
{
    "refreshToken": "eyJhbGciOiJIUzI1Ni...ldMTk6_9B8K9QgR-jGQpgg"
}
```

## Success response
**Code**: `200 OK`

**Content**:
```bash
{
    "accessToken": "eyJhbGciOiJIUzI1NiIsIn...bb_PqBFpLvtSF3JKRiMQ3-9nOu5M",
    "refreshToken": "eyJhbGciOiJIUzI1NiIsInR5c...F218Sa4DgdTXA7muiLL-cofteo"
}
```

## Error response
**Condition**: If any of the required fields is absent or invalid or expired refreshToken.

**Code**: `403 Forbidden`

**Content**:
```bash
{
    "error": {
        "status": 403,
        "message": "JsonWebTokenError"
    }
}
```