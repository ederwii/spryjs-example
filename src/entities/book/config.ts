import BookService from "../book/service";
import { EntityConfig } from "@codiks/spryjs";

const bookService = new BookService();

let bookConfig: EntityConfig = {
  service: bookService,
  name: 'Book',
  path: 'bm',
  keyword: 'code',
  config: {
    post: {
      isPrivate: true
    },
    delete: {
      isPrivate: true
    },
    put: {
      isPrivate: true
    },
    patch: {
      isDisabled: true
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