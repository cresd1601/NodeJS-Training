# Product Detail

## Sequence Diagram

![image info](./assets/product-detail.png)

---

## Get Product's Detail

_Used to get product of system by id._

**URL:** `/api/v1/catalogue/products/:productId`

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
  "id": 1,
  "categoryId": 1,
  "name": "pineapple",
  "unit": "kg",
  "price": 10,
  "image": "https://via.placeholder.com/150",
  "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus neque nisl.",
  "quantity": 16,
  "createdAt": "22-04-19 12:00:17",
  "updatedAt": "22-04-19 14:20:00"
}
```

## Error Response

**[*] Condition:** If client send wrong category id

**Code:** `404 NOT FOUND`

**Response Error Example:**

```json
{
  "errors": [
    {
      "value": "Invalid category id",
      "msg": "Item does not exist. It may have been deleted",
      "param": "categoryId",
      "location": "body"
    }
  ]
}
```
