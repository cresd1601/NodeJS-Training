# Activate Account

## Sequence Diagram

![image info](./assets/sign-up.png)

---

## User Activate Account

Use token of a registered User to verify phone number.

**URL:** `/api/v1/authentication/activate-account`

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
  "otp": "[valid OTP]"
}
```

**Request Data Example:**

```json
{
  "otp": "345126"
}
```

## Success Response

**Code:** `200 OK`

**Response Success Example:**

```json
{}
```

## Error Response

**[*] Condition:** If 'otp' is not matched with which we sent to user.

**Code:** `400 BAD REQUEST`

**Response Error Example:**

```json
{
  "errors": [
    {
      "param": "common",
      "msg": "Invalid code please try agains."
    }
  ]
}
```
