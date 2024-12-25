# User's Notification Settings

## Sequence Diagram

![image info](./assets/notification-settings.png)

---

## Get User's Notification Settings

_Used to get user's notification settings_

**URL:** `/api/v1/users/:userId/notification-settings`

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
  "method": "GET",
  "data": {
    "enableEmailNotification": false,
    "enableOrderNotification": false,
    "enableGeneralNotification": true
  }
}
```

---

## Update User's Notification Settings

_Used to update user notification settings_

**URL:** `/api/v1/users/:userId/notification-settings`

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
  "enableEmailNotification": "[enableEmailNotification in boolean value (true/false)]",
  "enableOrderNotification": "[enableOrderNotification in boolean value (true/false)]",
  "enableGeneralNotification": "[enableGeneralNotification in boolean value (true/false)]"
}
```

**Request Data Example:**

```json
{
  "enableEmailNotification": false,
  "enableOrderNotification": false,
  "enableGeneralNotification": false
}
```

## Success Response

**Code:** `200 OK`

**Response Success Example:**

```json
{
  "method": "PATCH",
  "data": {
    "enableEmailNotification": false,
    "enableOrderNotification": false,
    "enableGeneralNotification": false
  }
}
```
