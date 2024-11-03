# todo-app-server

Server for a To-Do application

## Overview

### Project Setup

- Created a `package.json` using `npm init`.
- Installed the following packages:
  - `express`
  - `dotenv`
  - `cors`
  - `body-parser`

### File Structure

Organized the project using a structured folder layout for scalability and maintainability:

```plaintext
src/
├── controllers/
├── middlewares/
├── models/
├── routes/
├── services/
└── utils/
```

### Environment Variables

- Created an `.env` file to define environment variables, such as `PORT`.
- Configured the project to use environment variables by importing `dotenv` in files where needed and accessing variables with `process.env`.

### Middleware and Server Setup

- Set up middleware in `index.js` and configured the server to listen on the specified port.
