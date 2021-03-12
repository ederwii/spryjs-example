import BookService from "../book/service";
import { EntityConfig } from "@codiks/spryjs";

const bookService = new BookService();

let bookConfig: EntityConfig = {
  service: bookService,
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
  },
  routes: [{
    verb: "post",
    cb: bookService.Read,
    ispv: true,
    route: 'read/:id'
  }]
}

export default bookConfig;