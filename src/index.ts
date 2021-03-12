/** dotenv */
import dotenv from 'dotenv';
dotenv.config();

import spryjs, { EntityConfig } from "@codiks/spryjs";
import BookService from "./entities/book/service";
import { MONGO_CS, TOKEN_SECRET, SALT, PORT } from "./constants"
import userModel from "./entities/user.model";

/**Initialize SpryJs */
spryjs.init(PORT).then((app) => {

  /** Enable MongoDB. Need to pass connection string as a parameter*/
  spryjs.useMongo(`${MONGO_CS}`);

  /** Enable morgan middleware */
  spryjs.useMorgan();

  /** Enable authentication. This will create the /api/user endpoint with the default user schema
   * (username, password). POST action will act as the register endpoint. The body must contain a JSON object
   * with username and password variables. Once registered, 
   */
  spryjs.useAuthentication(`${TOKEN_SECRET}`, `${SALT}`, userModel);

  /** Register Book entity. This will create the CRUD endpoints for /bm 
   * using Book entity for persistance.
   * Notice that some enpoints are protected for only authorized users
   */
  let bookConfig: EntityConfig = {
    service: new BookService(),
    name: 'Book',
    path: 'bm',
    keyword: 'code',
    config: {
      /** Let's protect some endpoints to only authorized users.
       * All other endpoints not mentioned in auth object will be non-protected
       * and will not require a token in the authorization header
      */
      auth: {
        post: true,
        delete: true,
        put: true
      }
    }
  }

  spryjs.registerEntity(bookConfig).then(() => {
  })
})

