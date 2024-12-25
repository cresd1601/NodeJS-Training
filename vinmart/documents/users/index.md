# Endpoints that require Authentication

Closed endpoints require a valid Token to be included in the header of the
request. A Token can be acquired from the Login view.

## Current User related

Endpoints for viewing and manipulating the system that the authenticated user
has permissions to access.

### Profile

- [Get Current User's Profile](./profile.md) : `GET /api/v1/users/:userId/profile`
- [Update Current User's Profile](./profile.md) : `PATCH /api/v1/users/:userId/profile`

### Avatar

- [Update Current User's Avatar](./avatar.md) : `PATCH /api/v1/users/:userId/avatar`

### Password

- [Update Current User's Password](./password.md) : `PUT /api/v1/users/:userId/password`

### Addresses

- [Get Current User's Addresses](./address.md) : `GET /api/v1/users/:userId/addresses`
- [Update Current User's Address](./address.md) : `PATCH /api/v1/users/:userId/addresses`
- [Add Current User's Address](./address.md) : `POST /api/v1/users/:userId/addresses`

### Notification Settings

- [Get Current User's Notification Settings](./notification-settings.md) : `GET /api/v1/users/:userId/notification-settings`
- [Update Current User's Notification Settings](./notification-settings.md) : `PATCH /api/v1/users/:userId/notification-settings`

### Cart Items

- [Get Current User's Cart Items](./cart-items.md) : `GET /api/v1/users/:userId/cart-items`
- [Add Current User's Cart Item](./cart-items.md) : `POST /api/v1/users/:userId/cart-items`
- [Update Current User's Cart Item](./cart-items.md) : `PATCH /api/v1/users/:userId/cart-items/:cartItemId`
- [Delete Current User's Cart Item](./cart-items.md) : `DELETE /api/v1/users/:userId/cart-items/:cartItemId`

### Favorite Items

- [Get Current User's Favorite Items](./favorite-items.md) : `GET api/v1/users/:userId/favorite-items`
- [Add Current User's Favorite Item](./favorite-items.md) : `POST api/v1/users/:userId/favorite-items`
- [Delete Current User's Favorite Item](./favorite-items.md) : `DELETE api/v1/users/:userId/favorite-items/:favoriteItemId`

### Payment Methods

- [Show All Current User's Payment Methods](./payment-methods.md) : `GET api/v1/users/:userId/payment-methods`
- [Add Current User's Payment Method](./payment-methods.md) : `POST api/v1/users/:userId/payment-methods`
- [Delete Current User's Payment Method](./payment-methods.md) : `DELETE api/v1/users/:userId/payment-methods/:paymentMethodId`

### Orders

- [Show All Current User's Orders](./orders.md) : `GET api/v1/users/:userId/orders`
- [Add Current User's Order](./orders.md) : `POST api/v1/users/:userId/orders`
- [Update Current User's Order](./orders.md) : `PATCH api/v1/users/:userId/orders/:orderId`

### Orders

- [Show All Current User's Order Statuses](./order-statuses.md) : `GET /api/v1/users/:userId/order-statuses`
