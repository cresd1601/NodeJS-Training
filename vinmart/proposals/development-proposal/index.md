# Development Proposal

## Overview

This document provides the estimation for Vinmart backend API regarding to [this Figma](<https://www.figma.com/file/gEB1mqF65awPMxf0y2im57/Grocery-App-(Big-Cart)-(Community)?node-id=2366%3A1073&t=nNIoSx3Fz3oj7RYp-1>) wireframe provided by Client.

## Team Size

- 1 Backend Developer
- 1 Devops

## Estimation

- **Timeline:** 3 weeks

## Assumptions

### General

- Full visual design and relevant art assets shall be ready and available for Agility team before the project kicks off for final review. Any additional work that may arise shall be raised up for further discussion if needed.
- Agility team will be in charge of backend work
- API documentation with workable endpoints should be ready and available for development team before the development of corresponding epics kicks off.

### Backend Collaboration

- This document layout the development roadmap layout the milestone plan. Backend team should be carefully review the frontend roadmap and make sure real endpoints with sample detailed response should be ready and available for frontend team ahead of time, at least 1 week before the corresponding engineering work starts.
- In case of unexpected delay due to lacking APIs, etc. The project timeline may be extended to cover time/efforts to mock data and rework when real APIs are provided.
- Backend team is expected to provide a full list of error codes to be applicable in app with clear definition.
- There are more works for backend handle, Product owner should be clarified and need to re-estimation for changes.

### Features

- **Authentication:** Registration or Sign up will be handled outside app. Assumed that Admin panel will handle the registration flow by backend. Admin will provide login credentials to user by email or something else, it needs to be defined from Product Owner.
- **Forgot password:** We’re assuming it’s standard flow. A recover password link will be sent to user’s email, he clicks on the link to recover his password. About sending recover password email will be implemented from backend.
- **User Avatar:** It’s assumed that user takes picture and access to Phone’s library to choose the picture. There is no crop/edit picture feature in there.
- **Search:** Assuming a simple Search feature. Only search by Product name, there is no advice search.
- **Shopping Cart & Favorite List:** Similar to any other e-commerce application, it will be used for users to select products. The shopping cart will also be linked to the app's payment system to make transactions
- **Filter:** The filter feature will be included to help users search for products based on necessary information such as: Price, Rating, Discount, Shipping method
- ...

## Technical Notes

### Libraries Version

- NodeJS v16.13.1
- Express v4.18.2
- Passport v0.6.0
- Sequelize v6.28.0
- Passport-JWT: v4.0.1
- PostgresSQL v15.1

### Tools & License

During the development, the development team will need the following tools to be provided:

- **Gitlab (commercial):** We strongly prefer to use GIT as the way to organize code base.
- **LastPass’ shared folder (optional - free):** This our prefered way to share username / password to development team. This could be revoked and updated easily.
- **Figma (recommended):** The development team might communicate directly on InVision if there are any questions/issues with the visual design.
- **Google Drive (free):** For sharing any project documents and files.

The following tools will be provided by Agility for communication / collaboration during development time.

- **Slack:** For everyday communication of the team: Product owners, Designers, Developers, etc.

### Production Environment

- Product Owner provides servers for Production environment.
- Agility developer configures to make it ready and to provide the build on Production environment.

### Development Environment

- Product Owner provides servers for development environment.
- Agility developer configures to make it ready and to provide the build on development environment.

## Roadmap

We propose to break down the engineering work into the following milestones.

### Milestone #0: Planning & Infrastructure

<u>Timeline:</u> 1 week.

The goal of this milestone is to layout foundation for the project. Here are the milestone objectives:

- **Planning:** Make a clear development plan, identify technical risks & solutions, setting up all required tools, and establish development process.
- **Infrastructure:** Developers will need to layout the foundation for development, build, and deploy applications. The infrastructure should be extensible for services along the way. The primary focus would be setting up the development environment where developer can develop and push code daily. These environment should mimic the production environment as much as possible.
- **Application architecture:** In this phase, we need to setup backend code skeleton where key libraries are identified and managed by package control. The standard build process should be setup so that application can be built, delivered, and tested easily.
- **APIs:** Backend developers will have to prepare and provide relevant API documents. Eg: Swagger

Here are some important notes:

- It is critical that by end of this milestone, API design, official API documents and real endpoints with detailed response for at least 2 upcoming sprints need to be ready and available for Agility team.
- Development environment with testing accounts will need to be prepared and provided before milestone #1 starts.

### Milestone #1: Authentication

<u>Timeline:</u> 2 weeks.

The goal of this milestone is to implement the authentication feature, help user can register an account & login with current account. Here are some notes for this milestone:

- **Sign Up:** User can register a new account to log in to the system.
- **Sign In:** After successful registration, this will be the place for users to log in to the system and interact with it.
- **Activate Account:** This feature is used to registration process, customers need to provide phone number for verification.
- **Resend Activate OTP:** This will be the solution, in case the customer does not receive the OTP code via SMS.
- **Reset Password:** In case the user has registered but does not remember the password, it will help the user create a new password through the email provided by the customer.
