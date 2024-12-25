# User's Favorite Items

## Sequence Diagram

![image info](./assets/favorite-items.png)

---

## Get User's Favorite Items

_Used to get user's favorite items_

**URL:** `/api/v1/users/:userId/favorite-items`

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
  "favoriteItems": [
    {
      "id": 1,
      "productId": 4
    },
    {
      "id": 2,
      "productId": 7
    }
  ]
}
```

---

## Add User's Favorite Item

_Used to add user's favorite item_

**URL:** `/api/v1/users/:userId/favorite-items`

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
  "productId": "[valid productId]"
}
```

**Request Data Example:**

```json
{
  "productId": 3
}
```

## Success Response

**Code:** `200 OK`

**Response Success Example:**

```json
{
  "id": 3,
  "productId": 3
}
```

## Error Response

**[*] Condition:** If "product" is already selected.

**Code:** `409 CONFLICT`

**Response Error Example:**

```json
{
  "errors": [
    {
      "value": "Invalid product id",
      "msg": "Product already selected",
      "param": "productId",
      "location": "body"
    }
  ]
}
```

---

## Delete User's Favorite Item

_Used to delete user's favorite item_

**URL:** `/api/v1/users/:userId/favorite-items/:favoriteItemId`

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

**[*] Condition:** If client send wrong favorite item id

**Code:** `404 NOT FOUND`

**Response Error Example:**

```json
{
  "errors": [
    {
      "value": "Invalid favorite item id",
      "msg": "Item does not exist. It may have been deleted",
      "param": "favoriteItemId",
      "location": "params"
    }
  ]
}
```
