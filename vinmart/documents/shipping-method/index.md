# Endpoints that require Authentication

Closed endpoints require a valid Token to be included in the header of the
request. A Token can be acquired from the Login view.

## System related

Endpoints for viewing and manipulating the system that the authenticated user
has permissions to access.

### Shipping Methods

- [Show All Shipping Methods](./shipping-methods.md) : `GET /api/v1/shipping-methods`
- [Add Shipping Method](./shipping-methods.md) : `POST /api/v1/shipping-methods`
- [Update Shipping Method](./shipping-methods.md) : `PATCH /api/v1/shipping-methods/:shippingMethodId`
- [Delete Shipping Method](./shipping-methods.md) : `DELETE /api/v1/shipping-methods/:shippingMethodId`
