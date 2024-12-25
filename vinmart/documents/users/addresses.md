# User's Addresses

## Sequence Diagram

![image info](./assets/addresses.png)

---

## Get User Addresses

_Used to get user's addresses_

**URL:** `/api/v1/users/:userId/addresses`

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
    "addresses": [
      {
        "id": 1,
        "recipientName": "Russell Austin",
        "address": "2811 Crescent Day. LA Port",
        "city": "California",
        "zipCode": 77571,
        "country": "United States",
        "phone": "+84918364535",
        "default": true,
        "createdAt": "22-04-19 12:00:17",
        "updatedAt": "22-04-19 14:20:00"
      },
      {
        "id": 2,
        "recipientName": "Jissca Simpson",
        "address": "2811 Crescent Day. LA Port",
        "city": "California",
        "zipCode": 77571,
        "country": "United States",
        "phone": "+84918364536",
        "default": false,
        "createdAt": "22-04-19 12:00:17",
        "updatedAt": "22-04-19 14:20:00"
      }
    ]
  }
}
```

---

## Add User's Address

_Used to add user address_

**URL:** `/api/v1/users/:userId/addresses`

**Method:** `POST`

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
  "recipientName": "[recipient recipientName in plain text]",
  "address": "[address in plain text]",
  "city": "[city in plain text]",
  "zipCode": "[valid zipCode number]",
  "country": "[country in plain text]",
  "phone": "[valid phone number]",
  "default": "[default in boolean value (true/false)]"
}
```

**Request Data Example:**

```json
{
  "recipientName": "Crescent Do",
  "address": "1601 Crescent Moon. DN Port",
  "city": "Da Nang",
  "zipCode": 550000,
  "country": "Viet Nam",
  "phone": "+84919473535",
  "default": false
}
```

## Success Response

**Code:** `200 OK`

**Response Success Example:**

```json
{
  "method": "POST",
  "data": {
    "id": 3,
    "recipientName": "Crescent Do",
    "address": "1601 Crescent Moon. DN Port",
    "city": "Da Nang",
    "zipCode": 550000,
    "country": "Viet Nam",
    "phone": "+84918364535",
    "default": false,
    "createdAt": "22-04-19 12:00:17",
    "updatedAt": "22-04-19 14:20:00"
  }
}
```

## Error Response

**[*] Condition:** If user send wrong phone format

**Code:** `400 BAD REQUEST`

**Response Error Example:**

```json
{
  "method": "POST",
  "error": {
    "code": 400,
    "errors": [
      {
        "domain": "addresses",
        "message": "This is not a valid phone format.",
        "locationType": "body",
        "location": "phone"
      }
    ]
  }
}
```

---

## Update User's Address

_Used to update user address_

**URL:** `/api/v1/users/:userId/addresses/:addressId/`

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
  "recipientName": "[valid recipientName address]",
  "address": "[address in plain text]",
  "city": "[city in plain text]",
  "zipCode": "[valid zipCopde number]",
  "country": "[country in plain text]",
  "phone": "[valid phone number]",
  "default": "[default in boolean value (true/false)]"
}
```

**Request Data Example:**

```json
{
  "recipientName": "Olivia Austin",
  "address": "2100 Crescent Night. LA Port",
  "city": "California",
  "zipCode": 77571,
  "country": "United States",
  "phone": "+84918364535",
  "default": true
}
```

## Success Response

**Code:** `200 OK`

**Response Success Example:**

```json
{
  "method": "PATCH",
  "data": {
    "id": 1,
    "recipientName": "Olivia Austin",
    "address": "2100 Crescent Night. LA Port",
    "city": "California",
    "zipCode": 77571,
    "country": "United States",
    "phone": "+84918364535",
    "default": true,
    "createdAt": "22-04-19 12:00:17",
    "updatedAt": "22-04-19 14:20:00"
  }
}
```

## Error Response

**[*] Condition:** If user send wrong phone format

**Code:** `400 BAD REQUEST`

**Response Error Example:**

```json
{
  "method": "PATCH",
  "error": {
    "code": 400,
    "errors": [
      {
        "domain": "addresses",
        "message": "This is not a valid phone format.",
        "locationType": "body",
        "location": "phone"
      }
    ]
  }
}
```

---

## Delete User's Address

_Used to delete user's address_

**URL:** `/api/v1/users/:userId/addresses/:addressId/`

**Method:** `DELETE`

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
{}
```

## Error Response

**[*] Condition:** If client send wrong address id

**Code:** `404 NOT FOUND`

**Response Error Example:**

```json
{
  "method": "DELETE",
  "error": {
    "code": 404,
    "errors": [
      {
        "domain": "addresses",
        "message": "Item does not exist. It may have been deleted",
        "locationType": "params",
        "location": "addressId"
      }
    ]
  }
}
```
