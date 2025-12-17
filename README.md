# Sysarmy Galicia Website

Website for Sysarmy Galicia, the site serves as the digital hub for the community, featuring event information, timeline gallery, community resources, and the code of conduct. Built with React 19, TypeScript, and TailwindCSS, it includes multilingual support for English, Spanish, and Galician.

## Table of Contents

- [Sysarmy Galicia Website](#sysarmy-galicia-website)
  - [Table of Contents](#table-of-contents)
  - [Technology Stack](#technology-stack)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
  - [Usage](#usage)
    - [Development Server](#development-server)
    - [Production Build](#production-build)
  - [Code Quality](#code-quality)
    - [Linting](#linting)
    - [Formatting](#formatting)
    - [Pre-commit Hooks](#pre-commit-hooks)
  - [Deployment](#deployment)

## Technology Stack

| Category             | Technologies                        |
| -------------------- | ----------------------------------- |
| Framework            | Next.js 15, React 19, TypeScript    |
| Styling              | TailwindCSS 4, PostCSS              |
| Internationalization | i18next, react-i18next              |
| Icons                | Font Awesome 7                      |
| Code Quality         | ESLint, Prettier, Husky, Commitlint |
| Containerization     | Docker                              |

## Prerequisites

Ensure the following are installed on your system before proceeding:

- **Node.js** — version 20 or higher
- **Yarn** — version 1.22.22 or higher

To verify your installations, run:

```bash
node --version
yarn --version
```

## Installation

1. Clone the repository:

   ```bash
   git clone git@github.com:Gallegarmy/sysarmy-galicia.git
   ```

2. Navigate to the project directory:

   ```bash
   cd sysarmy-galicia
   ```

3. Install dependencies:

   ```bash
   yarn install
   ```

## Usage

### Development Server

Start the local development server:

```bash
yarn dev
```

The application will be available at `http://localhost:3000`.

### Production Build

Generate a production-ready build:

```bash
yarn build
```

Start the production server locally:

```bash
yarn start
```

## Code Quality

This project enforces code quality through automated tooling.

### Linting

```bash
yarn lint
```

### Formatting

```bash
yarn prettier
```

### Pre-commit Hooks

The project uses Husky and lint-staged to automatically validate and format code before each commit. Commit messages must follow the [Conventional Commits](https://www.conventionalcommits.org/) specification, enforced by Commitlint.

## Deployment

This project includes Docker support for containerized deployment.

### Docker Deployment

Build and run the application using Docker Compose:

```bash
docker-compose up
```

The containerized application runs on port 3000 and uses Next.js standalone output mode for optimized production builds.

### Alternative Deployment

The project can be deployed to any Node.js hosting platform that supports Next.js:

1. Build the project:

   ```bash
   yarn build
   ```

2. Deploy the `.next` directory and run:

   ```bash
   yarn start
   ```
