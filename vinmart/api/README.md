# Vinmart API

## Description

Provide a short description explaining the what, why, and how of your project. Use the following questions as a guide:

- What was your motivation?
- Why did you build this project? (Note: the answer is not "Because it was a homework assignment.")
- What problem does it solve?
- What did you learn?

## Table of Contents

- [Installation](#installation)
- [Features](#features)
- [Usage](#usage)
- [Tests](#tests)

## Features

- [Authentication APIs](../documents/authentication/index.md)
- [Users APIs](../documents/users/index.md)
- [Catalogue APIs](../documents/catalogue/index.md)
- [Shipping Method APIs](../documents/shipping-method/index.md)

## Installation

1. Install Docker Desktop and start it

```
https://docs.docker.com/get-docker/
```

2. Turn on desktop WSL 2 for docker

```
https://docs.docker.com/desktop/windows/wsl/#turn-on-docker-desktop-wsl-2
```

3. Create environment variables `.env` file

```
# EXPRESS
PORT="3000"

# JWT
JWT_AUTHENTICATE_SECRET="\/1N/\/\4RT-4UTH3NT1C4T3-4P1"
JWT_AUTHENTICATE_OTP_SECRET="\/1N/\/\4RT-\/3R1FY-0TP-4P1"

# PRISMA
DATABASE_URL="<database_url>"

# MAIL
MAIL_SERVICE="<mail_service>"
MAIL_USERNAME="<mail_username>"
MAIL_APP_PASSWORD="<mail_app_password>"

# Cloud Storage
CLOUDINARY_NAME="<cloudinary_name>"
CLOUDINARY_KEY="<cloudinary_key>"
CLOUDINARY_SECRET="<cloudinary_secret>"
```

Replace placeholder as below information:

- `<database_url>` = your database url (ex: postgresql://vinmart:vinmartsecret@localhost:5434/vinmart_dev_db?schema=public)

- `<mail_service>` = choose your mail service (ex: gmail)
- `<mail_username>`= your mail username (ex: quy.do@asnet.com.vn)
- `<mail_app_password>` = your mail password or [application mail password](https://support.google.com/mail/answer/185833?hl=en)

- `<cloudinary_name>` = your cloudinary name (ex: )
- `<cloudinary_key>` = your cloudinary key (ex: )
- `<cloudinary_secret>` = your cloudinary secret (ex: )

<!-- # TWILIO
TWILIO_ACCOUNT_SID="<twilio_account_sid>"
TWILIO_VERIFY_SID="<twilio_verify_sid>"
TWILIO_AUTH_TOKEN="<twilio_auth_token>" -->

<!-- - `<twilio_account_sid>` = your Twilio account SID
- `<twilio_verify_sid>`= your Twilio verify SID
- `<twilio_auth_token>` = your Twilio auth token -->

4. Install node library packages.

```
npm install
```

5. Builds, (re)creates, starts, and attaches to containers for a service.

```
npm run db:dev:up
```

6. Migrations database

```
npm run db:dev:migrate
```

7. Build source code

```
npm run build
```

8. Running the server

```
npm run start
```

9. Start to develop (optional)

```
npm run dev
```

---

Issue #1:

```
Error: Get config: Schema Parsing P1012
```

If you get an error during migration. You should delete the `.env` file and the `prisma` folder, then run the following command:

```
npx prisma init
```

## Usage

Step #1: Sign up account with the information provided

![image info](./assets/images/screenshot/1.png)

- [Sign Up](../documents/authentication/sign-up.md) : `POST /api/v1/authentication/sign-up`

Step #2: Active account with received token and otp

![image info](./assets/images/screenshot/2.png)

![image info](./assets/images/screenshot/3.png)

![image info](./assets/images/screenshot/4.png)

- [Active Account](../documents/authentication/activate-account.md) : `POST /api/v1/authentication/activate-account`

Step #3: Sign in account

![image info](./assets/images/screenshot/5.png)

- [Sign In](../documents/authentication/sign-in.md) : `POST /api/v1/authentication/sign-in`

<!-- ## Tests

Go the extra mile and write tests for your application. Then provide examples on how to run them here. -->
