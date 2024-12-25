# Endpoints that require Authentication

Closed endpoints require a valid Token to be included in the header of the
request. A Token can be acquired from the Login view.

## System related

Endpoints for viewing and manipulating the system that the authenticated user
has permissions to access.

### Categories

- [Show All Categories](./categories.md) : `GET /api/v1/catalogue/categories`
- [Add Category](./categories.md) : `POST /api/v1/catalogue/categories`

### Product Units

- [Show All Product Units](./product-units.md) : `GET /api/v1/catalogue/product-units`
- [Add Product](./product-units.md) : `POST /api/v1/catalogue/product-units`

### Products

- [Show All Products](./products.md) : `GET /api/v1/catalogue/products`
- [Add Product](./products.md) : `POST /api/v1/catalogue/products`

### Product Detail

- [Show Product Detail](./product-detail.md) : `GET /api/v1/catalogue/products/:productId`

### Reviews

- [Show All Product's Review](./reviews.md) : `GET /api/v1/catalogue/products/:productId/reviews`
- [Add Product's Review](./reviews.md) : `POST /api/v1/catalogue/products/:productId/reviews`
