# Products

## Sequence Diagram

![image info](./assets/products.png)

---

## Get Products

_Used to get all products of system._

**URL:** `/api/v1/catalogue/products`

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

**Filter**

```json
GET /products?minPrice=50&maxPrice=100
GET /products?rating=4
GET /products?categoryId=1
```

**Paginate**

Use `page` and optionally `limit` to paginate returned data.

```json
GET /products?page=7
GET /products?page=7&limit=20
```

10 items are returned by default

**Sort**

Add `sortBy` and `orderBy` (ascending order by default)

```json
GET /products?sortBy=price&orderBy=desc
GET /products/1/comments?sortBy=rating&orderBy=asc
```

**Full-text search**

Add `search`

```json
GET /products?search=pineapple
```

## Success Response

**Code:** `200 OK`

**Response Success Example:**

```json
{
  "products": [
    {
      "id": 1,
      "categoryId": 1,
      "productUnitId": 1,
      "name": "pineapple",
      "price": 10,
      "images": [
        "https://via.placeholder.com/150",
        "https://via.placeholder.com/150"
      ],
      "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus neque nisl.",
      "quantityStock": 16,
      "createdAt": "22-04-19 12:00:17",
      "updatedAt": "22-04-19 14:20:00"
    },
    {
      "id": 2,
      "categoryId": 1,
      "productUnitId": 1,
      "name": "apple",
      "price": 30,
      "images": [
        "https://via.placeholder.com/150",
        "https://via.placeholder.com/150"
      ],
      "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus neque nisl.",
      "quantityStock": 42,
      "createdAt": "22-04-19 12:00:17",
      "updatedAt": "22-04-19 14:20:00"
    }
  ]
}
```

## Error Response

**[*] Condition:** If client send wrong pagination or filter params

**Code:** `400 BAD REQUEST`

**Response Error Example:**

```json
{
  "errors": [
    "Invalid pagination/filter params.",
    "The given category was invalid"
  ]
}
```

---

## Create Product

_Used to add product_

**URL:** `/api/v1/catalogue/products`

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
  "categoryId": "[valid categoryId]",
  "productUnitId": "[valid productUnitId]",
  "name": "[name in plain text]",
  "description": "[description in plain text]",
  "price": "[price in float number]",
  "quantityStock": "[valid quantityStock number]",
  "images": "[valid formData image]"
}
```

**Request Form Data Images example (multipart/form-data)**

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
      description: The product's images to upload.
}
```

## Success Response

**Code:** `200 OK`

**Response Success Example:**

```json
{
  "id": 3,
  "categoryId": 1,
  "name": "watermelon",
  "productUnitId": 1,
  "price": 25,
  "images": [
    "https://via.placeholder.com/150",
    "https://via.placeholder.com/150"
  ],
  "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus neque nisl.",
  "quantityStock": 16,
  "createdAt": "22-04-19 12:00:17",
  "updatedAt": "22-04-19 14:20:00"
}
```

## Error Response

**[*] Condition:** If 'name' is already registered.

**Code:** `409 CONFLICT`

**Response Error Example:**

```json
{
  "errors": [
    {
      "param": "name",
      "msg": "Name already registered",
      "location": "body"
    }
  ]
}
```

**[*] Condition:** If 'categoryId' or 'productUnitId' is not registered.

**Code:** `400 BAD REQUEST`

**Response Error Example:**

```json
{
  "errors": [
    {
      "param": "categoryId",
      "msg": "Category is not registered",
      "location": "body"
    },
    {
      "param": "productUnitId",
      "msg": "Product Unit is not registered",
      "location": "body"
    }
  ]
}
```

**[*] Condition:** If uploaded file with unsupported media type

**Code:** `415 UNSUPPORTED MEDIA TYPE`

**Response Error Example:**

```json
{
  "errors": ["The image uploaded with wrong media type"]
}
```

**[*] Condition:** If uploaded file too large

**Code:** `413 REQUEST ENTITY TOO LARGE`

**Response Error Example:**

```json
{
  "errors": ["The image uploaded with too large size"]
}
```
