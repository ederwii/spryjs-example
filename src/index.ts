/** dotenv */
import dotenv from 'dotenv';
dotenv.config();

import spryjs from "@codiks/spryjs";
import { MONGO_CS, AUTH_CONFIG, PORT } from "./constants"
import config from "./entities/book/config";

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
  spryjs.useAuthentication(AUTH_CONFIG);

  /** Register Book entity. This will create the CRUD endpoints for /bm 
   * using Book entity for persistance.
   * Notice that some enpoints are protected for only authorized users
   */
  spryjs.registerEntity(config).then(() => {
    // All set! Full CRUD with custom routes has been created and registered.
    spryjs.mapUserProperty('code', 'book', 'registeredBy')
  })
})

