# User's Cart Items

## Sequence Diagram

![image info](./assets/cart-items.png)

---

## Get User's Cart Items

_Used to get user's cart items_

**URL:** `/api/v1/users/:userId/cart-items`

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
  "cartItems": [
    {
      "id": 1,
      "productId": 4,
      "quantity": 10
    },
    {
      "id": 2,
      "productId": 7,
      "quantity": 5
    }
  ]
}
```

---

## Add User's Cart Item

_Used to add user's cart item_

**URL:** `/api/v1/users/:userId/cart-items`

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
  "productId": "[valid productId]",
  "quantity": "[quantity in integer number]"
}
```

**Request Data Example:**

```json
{
  "productId": 3,
  "quantity": 1
}
```

## Success Response

**[*] Condition:** quantity > 0

**Code:** `200 OK`

**Response Success Example:**

```json
{
  "id": 3,
  "productId": 3,
  "quantity": 1
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

**[*] Condition:** If the user selected out of stock product

**Code:** `400 BAD REQUEST`

**Response Error Example:**

```json
{
  "errors": [
    {
      "value": "Invalid product id",
      "param": "productId",
      "msg": "Product is out of stock",
      "location": "body"
    }
  ]
}
```

**[*] Condition:** If user send quantity less than 0

**Code:** `400 BAD REQUEST`

**Response Error Example:**

```json
{
  "errors": [
    {
      "value": "Invalid quantity value",
      "param": "quantity",
      "msg": "Please select a value that is no less than 0",
      "location": "body"
    }
  ]
}
```

---

## Update User's Cart Item

_Used to update user's cart item_

**URL:** `/api/v1/users/:userId/cart-items/:cartItemId`

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
  "quantity": "[quantity in integer number]"
}
```

**Request Data Example:**

```json
{
  "quantity": 9
}
```

## Success Response

**[*] Condition:** quantity > 0

**Code:** `200 OK`

**Response Success Example:**

```json
{
  "id": 1,
  "productId": 4,
  "quantity": 9
}
```

**[*] Condition:** quantity = 0

**Code:** `200 OK`

**Response Success Example:**

```json
{}
```

## Error Response

**[*] Condition:** If user send quantity less than 0

**Code:** `400 BAD REQUEST`

**Response Error Example:**

```json
{
  "errors": [
    {
      "value": "Invalid quantity value",
      "param": "quantity",
      "msg": "Please select a value that is no less than 0",
      "location": "body"
    }
  ]
}
```

**[*] Condition:** If the user enters a quantity more than the quantity in stock

**Code:** `400 BAD REQUEST`

**Response Error Example:**

```json
{
  "errors": [
    {
      "value": "Invalid product id",
      "param": "productId",
      "msg": "Product is out of stock",
      "location": "body"
    }
  ]
}
```

---

## Delete User's Cart Item

_Used to delete user's cart item_

**URL:** `/api/v1/users/:userId/cart-items/:cartItemId`

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

**[*] Condition:** If client send wrong cart item id

**Code:** `404 NOT FOUND`

**Response Error Example:**

```json
{
  "errors": [
    {
      "value": "Invalid cart item id",
      "msg": "Item does not exist. It may have been deleted",
      "param": "cartItemId",
      "location": "params"
    }
  ]
}
```
