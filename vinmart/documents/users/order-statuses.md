# Order Statuses

## Sequence Diagram

![image info](./assets/order-statuses.png)

---

## Get Order Statuses

_Used to get all order statuses or current user_

**URL:** `/api/v1/users/:userId/order-statuses`

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
  "orderStatuses": [
    {
      "id": 1,
      "orderId": 1,
      "status": "Order Placed",
      "createdAt": "22-04-19 12:00:17"
    },
    {
      "id": 2,
      "orderId": 1,
      "status": "Order Confirmed",
      "createdAt": "22-04-19 12:00:17"
    },
    {
      "id": 3,
      "orderId": 1,
      "status": "Order Shipped",
      "createdAt": "22-04-19 12:00:17"
    }
  ]
}
```
