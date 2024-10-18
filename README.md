# Renovator (Strapi backend)

**`<IMG GOES HERE>`**

An open-source web configurator tool for renovation projects.

Developed by Estonian Academy of Arts (EKA).

Strapi is a headless Content Management System (CMS), it helps to create and manage data for your configurators.

NOTE: This project is using Strapi v5.

Consists of two parts:

- Frontend (**`<URL GOES HERE>`**)
- Backend (this repository)

### Tech stack

- Strapi v5
- Postgres
- Docker

**How to start this app?**

- Deploy it using your favourite method
- Add environment variables
- Create your admin user
- Make sure that projects can be accessed by Public Role

---

## Deploy

Deploy full stack (frontend + backend) on Railway

[![Deploy on Railway](https://railway.app/button.svg)](https://railway.app/new/template/ZweBXA)

Or deploy only the backend

[![Deploy on Railway](https://railway.app/button.svg)](https://railway.app/new/template/ZweBXA)

If you want to deploy it on your own hosting, use Docker. `Dockerfile` and `docker-compose.yml` are provided.

### ⚠️ Environment variables

Check `.env.example` for basic understanding.

This project needs the following environment variables to run properly:

- **`HOST`** - default is `0.0.0.0`
- **`PORT`** - default is `1337`
- **`APP_KEYS`** - generate a random string
- **`API_TOKEN_SALT`** - generate a random string
- **`ADMIN_JWT_SECRET`** - generate a random string
- **`TRANSFER_TOKEN_SALT`** - generate a random string
- **`JWT_SECRET`** - generate a random string
- **`DATABASE_CLIENT`** - default is `postgres`
- **`DATABASE_HOST`** - default is `127.0.0.1`
- **`DATABASE_PORT`** - default is `5432`
- **`DATABASE_NAME`** - default is `strapi`
- **`DATABASE_USERNAME`** - default is `strapi`
- **`DATABASE_PASSWORD`** - default is `strapi_password`
- **`DATABASE_SSL`** - default is `false`

### Creating admin user

### Giving permission to the Public Role

### Using Docker in production

By default `Dockerfile` and `docker-compose.yml` are configured for production build.
That's enough for most use cases, but if you inted to modify schema of your data, you would need to run your app in development mode.

### Using Docker in development

NOTE: if you simply run `npm run develop` it will start the Strapi app in development mode without a database. You of course can connect it to production database using `.env` variables, but it's not a good practice.

It's possible to easily start the database in Docker and the Strapi app together, use the following command

```
npm run develop:with-db
```

In case you want to start only the database in Docker use

```
npm run develop:db-only
```

# For developers

Strapi comes with a full featured [Command Line Interface](https://docs.strapi.io/dev-docs/cli) (CLI) which lets you scaffold and manage your project in seconds.

### `develop`

Start your Strapi application with autoReload enabled. [Learn more](https://docs.strapi.io/dev-docs/cli#strapi-develop)

```
npm run develop
# or
yarn develop
```

### `start`

Start your Strapi application with autoReload disabled. [Learn more](https://docs.strapi.io/dev-docs/cli#strapi-start)

```
npm run start
# or
yarn start
```

### `build`

Build your admin panel. [Learn more](https://docs.strapi.io/dev-docs/cli#strapi-build)

```
npm run build
# or
yarn build
```
