# Sign Up

## Sequence Diagram

![image info](./assets/sign-up.png)

---

## User Sign Up

Used to collect a Token for a registered User.

**URL:** `/api/v1/authentication/sign-up`

**Method:** `POST`

**Auth Required:** NO

**Request Data Constraints**

```json
{
  "email": "[valid email address]",
  "password": "[password in plain text]",
  "phone": "[valid phone number]"
}
```

**Request Data Example**

```json
{
  "email": "iloveauth@example.com",
  "password": "Example123!@#",
  "phone": "+84918364535"
}
```

## Success Response

**Code:** `201 CREATED`

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

**[*] Condition:** If 'email' or 'phone' is already registered.

**Code:** `409 CONFLICT`

**Response Error Example:**

```json
{
  "method": "POST",
  "error": {
    "code": 409,
    "errors": [
      {
        "domain": "sign-up",
        "message": "Email already registered",
        "locationType": "body",
        "location": "email"
      },
      {
        "domain": "sign-up",
        "message": "Phone Number already registered",
        "locationType": "body",
        "location": "email"
      }
    ]
  }
}
```
