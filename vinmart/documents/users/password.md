# User's Password

## Sequence Diagram

![image info](./assets/password.png)

---

## Update User's Password

_Used to update user password_

**URL:** `/api/v1/users/:userId/password`

**Method:** `PATCH`

**Auth Required:** YES

**HTTP Headers Constraints:**

```json
{
  "authorization": "JWT [valid token]"
}
```

**HTTP Headers Example:**

```json
{
  "authorization": "JWT eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c"
}
```

**Request Data Constraints:**

```json
{
  "currentPassword": "[valid old password]",
  "newPassword": "[valid new password]",
  "confirmPassword": "[valid confirm password]"
}
```

**Request Data Example:**

```json
{
  "currentPassword": "123789456",
  "newPassword": "789123456",
  "confirmPassword": "789123456"
}
```

## Success Response

**Code:** `200 OK`

**Response Success Example:**

```json
{}
```

## Error Response

**[*] Condition:** If current password is incorrect

**Code:** `400 BAD REQUEST`

**Response Error Example:**

```json
{
  "method": "PATCH",
  "error": {
    "code": 400,
    "errors": [
      {
        "domain": "password",
        "message": "Current password is incorrect",
        "locationType": "body",
        "location": "currentPassword"
      }
    ]
  }
}
```

**[*] Condition:** If current password same with new password

**Code:** `400 BAD REQUEST`

**Response Error Example:**

```json
{
  "method": "PATCH",
  "error": {
    "code": 400,
    "errors": [
      {
        "domain": "password",
        "message": "New password cannot be same as current password",
        "locationType": "body",
        "location": "newPassword"
      }
    ]
  }
}
```
