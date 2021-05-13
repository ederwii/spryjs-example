
let orderConfig = {
  name: 'Order',
  path: 'order',
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
  }
}

export default orderConfig;