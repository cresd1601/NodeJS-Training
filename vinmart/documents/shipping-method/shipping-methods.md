# Shipping Methods

## Sequence Diagram

![image info](./assets/shipping-methods.png)

---

## Get Shipping Methods

_Used to get shipping methods_

**URL:** `/api/v1/shipping-methods`

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
  "shippingMethods": [
    {
      "id": 1,
      "name": "Standard Delivery",
      "description": "Order will be đelivered between 3-4 business days straights to your doorstep",
      "price": 3
    },
    {
      "id": 2,
      "name": "Next Day Delivery",
      "description": "Order will be đelivered between 1-2 business days straights to your doorstep",
      "price": 5
    },
    {
      "id": 3,
      "name": "Nominated Delivery",
      "description": "Order will be đelivered between 3-4 business days straights to your doorstep",
      "price": 5
    }
  ]
}
```

---

## Add Shipping Method

_Used to add shipping method_

**URL:** `/api/v1/shipping-methods`

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
  "name": "[name in plain text]",
  "description": "[description in plain text]",
  "price": "[price in float number]"
}
```

**Request Data Example:**

```json
{
  "name": "Freehand Delivery",
  "description": "Order will be đelivered between 3-4 business days straights to your doorstep",
  "price": 3
}
```

## Success Response

**Code:** `200 OK`

**Response Success Example:**

```json
{
  "id": 4,
  "name": "Freehand Delivery",
  "description": "Order will be đelivered between 3-4 business days straights to your doorstep",
  "price": 3
}
```

---

## Update Shipping Method

_Used to update shipping method_

**URL:** `/api/v1/shipping-methods/:shippingMethodId`

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
  "name": "[name in plain text]",
  "description": "[description in plain text]",
  "price": "[price in float number]"
}
```

**Request Data Example:**

```json
{
  "name": "Freehand Delivery (Updated)",
  "description": "Order will be đelivered between 3-4 business days straights to your doorstep",
  "price": 10
}
```

## Success Response

**Code:** `200 OK`

**Response Success Example:**

```json
{
  "id": 4,
  "name": "Freehand Delivery (Updated)",
  "description": "Order will be đelivered between 3-4 business days straights to your doorstep",
  "price": 10
}
```

---

## Delete Shipping Method

_Used to delete shipping method_

**URL:** `/api/v1/shipping-methods/:shippingMethodId`

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
