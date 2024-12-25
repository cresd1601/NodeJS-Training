# Payment Methods

## Sequence Diagram

![image info](./assets/payment-methods.png)

---

## Get Payment Methods

_Used to get payment methods_

**URL:** `/api/v1/users/:userId/payment-methods`

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
  "paymentMethods": [
    {
      "id": 1,
      "type": "paypal"
    },
    {
      "id": 2,
      "type": "credit card"
    },
    {
      "id": 3,
      "type": "apple pay"
    }
  ]
}
```

---

## Add Payment Method

_Used to add payment method_

**URL:** `api/v1/users/:userId/payment-methods`

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
  "type": "[valid payment type]"
}
```

**Request Data Example:**

```json
{
  "type": "paypal"
}
```

## Success Response

**Code:** `200 OK`

**Response Success Example:**

```json
{
  "id": 4,
  "type": "paypal"
}
```

---

## Delete Payment Method

_Used to delete payment method_

**URL:** `api/v1/users/:userId/payment-methods/:paymentMethodId`

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
