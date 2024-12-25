# User's Profile

## Sequence Diagram

![image info](./assets/profile.png)

---

## Get User Profile

_Used to get user profile_

**URL:** `/api/v1/users/:userId/profile`

**Method:** `GET`

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

## Success Response

**Code:** `200 OK`

**Response Success Example:**

```json
{
  "method": "GET",
  "data": {
    "email": "oliviaaustin@gmail.com",
    "image": "https://via.placeholder.com/150",
    "name": "Olivia Austin",
    "phone": "+84918364535"
  }
}
```

---

## Update User's Profile

_Used to update user profile_

**URL:** `/api/v1/users/:userId/profile`

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
  "email": "[valid email address]",
  "name": "[name in plain text]",
  "phone": "[valid phone number]"
}
```

**Request Data Example:**

```json
{
  "email": "russell.partner@gmail.com",
  "name": "Russell Austin",
  "phone": "+84918364535"
}
```

## Success Response

**Code:** `200 OK`

**Response Success Example:**

```json
{
  "method": "PATCH",
  "data": {
    "email": "russell.partner@gmail.com",
    "name": "Russell Austin",
    "phone": "+84918364535"
  }
}
```

## Error Response

**[*] Condition:** If 'email' or 'phone' is used by another.

**Code:** `409 CONFLICT`

**Response Error Example:**

```json
{
  "method": "PATCH",
  "error": {
    "code": 409,
    "errors": [
      {
        "domain": "profile",
        "message": "Email already registered",
        "locationType": "body",
        "location": "email"
      },
      {
        "domain": "profile",
        "message": "Phone Number already registered",
        "locationType": "body",
        "location": "email"
      }
    ]
  }
}
```
