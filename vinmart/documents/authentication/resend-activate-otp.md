# Resend Activate OTP

## Sequence Diagram

![image info](./assets/resend-activate-otp.png)

---

## User Resend Activate OTP

Used to resend activate OTP code to user.

**URL:** `/api/v1/authentication/resend-activate-otp`

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
  "phone": "[valid phone number]"
}
```

**Request Data Example:**

```json
{
  "phone": "+84918364535"
}
```

## Success Response

**Code:** `200 OK`

**Response Success Example:**

```json
{}
```

## Error Response

**[*] Condition:** If OTP Authentication Service failed to send SMS to user.

**Code:** `400 BAD REQUEST`

**Response Error Example:**

```json
{}
```
