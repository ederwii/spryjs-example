# spryjs-example
This code shows how to implement [SpryJs](https://github.com/ederwii/spryjs) in order to create a Web API with JWT authentication and MongoDB database implementation.

## Important
This example has been created with educational purposes. This example might lack of security configuration or other production-related configuration. 

### Getting started
Clone this repository and install all the dependencies. Run `npm i` in a console.

This code uses [dotenv](https://www.npmjs.com/package/dotenv) for environment variables. First thing to do, is to create a `.env` file in the root with the following

```
PORT=
TOKEN_SECRET=
SALT=
MONGO_CS=
```
*Values are plain text (no quotes)*

**PORT** Port that will be used to create the server

**TOKEN_SECRET** Secret string for token generation. Use a random string

**SALT** Secret string for password generation. Use a random string

**MONGO_CS** MongoDB Connection string. You can create a free cluster in [MongoDB](https://www.mongodb.com/)

Once the above is configured, run `npm run dev` command and the server should start listening on the given port and will create the following endpoints.

### User management endpoints 
(automatically generated at the moment of calling `spryjs.useAuthentication()`)

* #### /api/user
  * POST (Register) - `username` and `password` must be in the payload
  * GET
* #### /api/user/login
  * POST - `username` and `password` must be in the payload
* #### /api/user/password (change password endpoint)
  * POST - `password` and `newPassword` must be in the payload
* #### /api/user/:id
  * DELETE
  * GETBYID

### Book management endpoints
(Generated via `spryjs.registerEntity()`)

Some of these endpoints are private. We must send the `Bearer <token>` in a `authorization` header.

* #### /api/bm
  * POST (protected, need to send JWT)
  * GET
* #### /api/bm/:id
  * DELETE (protected, need to send JWT)
  * PUT (protected, need to send JWT)
  * GETBYID
