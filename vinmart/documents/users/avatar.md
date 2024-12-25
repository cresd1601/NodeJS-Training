# User's Avatar

## Sequence Diagram

![image info](./assets/avatar.png)

---

## Update User's Avatar

_Used to update user avatar_

**URL:** `/api/v1/users/:userId/avatar`

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

**Request Data Constraints (multipart/form-data):**

```json
{
  "image": "[valid formData image]"
}
```

**Request Form Data Image Example (multipart/form-data):**

```
{
  summary: Uploads a file.
    consumes:
      - multipart/form-data
  parameters:
    - in: formData
      name: image
      type: file
      required: true
      description: The avatar to upload.
}
```

## Success Response

**Code:** `200 OK`

**Response Success Example:**

```json
{
  "method": "PATCH",
  "data": {
    "image": "https://via.placeholder.com/150"
  }
}
```

## Error Response

**[*] Condition:** If uploaded file with unsupported media type

**Code:** `415 UNSUPPORTED MEDIA TYPE`

**Response Error Example:**

```json
{
  "method": "PATCH",
  "error": {
    "code": 415,
    "errors": [
      {
        "domain": "avatar",
        "message": "The image uploaded with wrong media type.",
        "locationType": "multipart/form-data",
        "location": "image"
      }
    ]
  }
}
```

**[*] Condition:** If uploaded file too large

**Code:** `413 REQUEST ENTITY TOO LARGE`

**Response Error Example:**

```json
{
  "method": "PATCH",
  "error": {
    "code": 413,
    "errors": [
      {
        "domain": "avatar",
        "message": "The image uploaded with too large size.",
        "locationType": "multipart/form-data",
        "location": "image"
      }
    ]
  }
}
```
