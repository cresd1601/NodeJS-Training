# Development Plan

## Overview

This document provides development plan for project.

## Goals

1. Designs the database schema and system architecture.
2. Implement Authentication and Authorization features for systems

## Team Size

- 1 Backend Developer
- 1 Devops

## Technical Notes

### Libraries Version

- NodeJS v16.13.1
- Express v4.18.2
- Passport v0.6.0
- Sequelize v6.28.0
- Passport-JWT: v4.0.1
- PostgresSQL v15.1

## Development Plan

### RELEASE #1

<u>Timeline:</u> 1 week.

**EPIC: Analysis**

Developer learns requirements
Developer creates architecture proposal
Developer sets up environment for development
Developer initializes code base
Developer design architecture, sequence & entity-relationship diagrams for authentication & authorization feature

**EPIC: Implement Authentication and do XXX categories**

Developer design schema database for Vinmart
Developer set up Docker for CI/CD process

### RELEASE #2

<u>Timeline:</u> 2 week.

**EPIC: Implement feature to create new account**

Developer defined model & setup database
Developer implements API for Sign Up feature
Developer implements API for Active Account feature
Developer implements API for Resend Activate OTP feature
Developer intergrate with SMS Service
Developer creates unit testing
Developer deploy lastest code to cloud

**EPIC: Implement feature to verify created account & grant access permission**

Developer implements API for Sign In feature
Developer implements API for Reset Password feature
Developer intergrate with Email Service
Developer creates unit testing
Developer deploy lastest code to cloud
