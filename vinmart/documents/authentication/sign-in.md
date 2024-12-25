# Sign In

## Sequence Diagram

![image info](./assets/sign-in.png)

---

## User Sign In

Used to collect a Token for a registered User.

**URL:** `/api/v1/authentication/sign-in`

**Method:** `POST`

**Auth Required:** NO

**Request Data Constraints:**

```json
{
  "email": "[valid email address]",
  "password": "[password in plain text]"
}
```

**Request Data Example:**

```json
{
  "email": "iloveauth@example.com",
  "password": "Example123!@#"
}
```

## Success Response

**Code:** `200 OK`

**Response Success Example:**

```json
{
  "method": "POST",
  "data": {
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c"
  }
}
```

## Error Response

**[*] Condition:** If 'email' and 'password' is wrong.

**Code:** `400 BAD REQUEST`

**Response Error Example:**

```json
{
  "method": "POST",
  "error": {
    "code": 400,
    "errors": [
      {
        "domain": "sign-in",
        "message": "Something went wrong during the authentication process. Please try signing in again.",
        "locationType": "body",
        "location": "email,password"
      }
    ]
  }
}
```
