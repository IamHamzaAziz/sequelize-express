# Sequelize & Express

A comprehensive Node.js backend using Express.js and Sequelize ORM for MySQL database interactions. This repo provides a solid foundation for building RESTful APIs with proper project structure and best practices.

## Features

- Express.js server
- Sequelize ORM with MySQL2
- Modern ES Modules support
- Database migrations and seeders
- Environment variables configuration
- Organized route structure
- Modular model definitions

## Prerequisites

- Node.js
- MySQL Server
- pnpm (recommended) or npm/yarn


## Project Structure

```
project-root/
├── config/              # Configuration files (config.cjs & db.js)
├── migrations/          # Database migration files
├── models/              # Sequelize models
├── routes/              # API route handlers
├── seeders/             # Database seed files
├── .env                 # Environment variables
├── .sequelizerc         # Sequelize CLI config
├── app.js               # Main application entry
└── package.json
```

## Initiliaze Sequelize CLI

In order to use Sequelize CLI in the project, first initialize it
```bash
npx sequelize-cli init
```

This creates:
- models/
- migrations/
- seeders/
- config/config.js

Since the project uses "type": "module" in package.json, the default CommonJS files created by Sequelize CLI (like config.js, seeders and migrations) need to be renamed to .cjs to avoid module type conflicts.

## Creating New Migration

1. Generate a new migration:
   ```bash
   npx sequelize-cli migration:generate --name <migration-name like create-users-table>
   ```

2. Edit the generated migration file in the `migrations` directory

3. Run the migration:
   ```bash
   npx sequelize-cli db:migrate
   ```

## Creating Seeders

1. Generate a new seeder:
   ```bash
   npx sequelize-cli seed:generate --name <seeder-name like demo-users>
   ```

2. Edit the generated seeder file in the `seeders` directory

3. Run all seeders:
   ```bash
   npx sequelize-cli db:seed:all
   ```
   or for running a single seeder
   ```bash
   npx sequelize-cli db:seed --seed <seeder-file-name like 20250719173050-demo-posts.cjs>
   ```

