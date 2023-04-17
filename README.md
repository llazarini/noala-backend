# Noala

The backend was made with NestJS with a MySQL database running inside a docker container.

## How to put the MySQL up
```bash
# Create a network called backend
$ docker create network backend

# This will create a mysql data directory inside the database directory
$ docker-compose up -d
```

## Installation

```bash
$ yarn install
```

## Running the app

```bash
# development
$ yarn run start

# watch mode
$ yarn run start:dev

# production mode
$ yarn run start:prod
```

## How seed the database
```bash
# I created a command to seed the database using the Dog API
$ yarn command images-seed
```

## Test

```bash
# unit tests
$ yarn run test

# e2e tests
$ yarn run test:e2e

# test coverage
$ yarn run test:cov
```
