# Express TypeScript Template

This project is a boilerplate for building RESTful APIs using [Express](https://expressjs.com/) and [TypeScript](https://www.typescriptlang.org/). It includes basic project structure, scripts for development and production, and integration with a database.

## Features

- Express.js server
- TypeScript support
- Environment variable management
- Database integration (see below)
- Ready-to-use scripts for development and production

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (v16+ recommended)
- [npm](https://www.npmjs.com/) or [yarn](https://yarnpkg.com/)
- [Docker](https://www.docker.com/) (for running the database)

### Installation

1. Clone the repository:
    ```bash
    git clone <repo-url>
    cd express-ts-template
    ```

2. Install dependencies:
    ```bash
    npm install
    # or
    yarn install
    ```

### Running the Database

The project uses Docker to run the database. Make sure Docker is installed and running.

Start the database container:
```bash
docker-compose up
```

This will start the database defined in the `docker-compose.yml` file.

### Running the Project

#### Development

Start the server in development mode (with hot-reloading):
```bash
npm run dev
# or
yarn dev
```

#### Production

Build the project:
```bash
npm run build
# or
yarn build
```

Start the server in production mode:
```bash
npm start
# or
yarn start
```

### Useful Scripts from `package.json`

- `dev` — Runs the server in development mode with hot-reloading.
- `build` — Compiles TypeScript to JavaScript.
- `start` — Runs the compiled server in production mode.

## Environment Variables

Configuration is managed via the `.env` file. Copy `.env.example` to `.env` and adjust values as needed.

```bash
cp .env.example .env
```

## Important for Production

**Do not commit your `.env` file to version control in production!**

By default, `.env` is commented out in `.gitignore`.
**Uncomment the `.env` line in `.gitignore` before deploying to production** to ensure sensitive data is not tracked by git.

## License

MIT
