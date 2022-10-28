const baseURL = "https://localhost:7056/api/"

const controllers = {
  image: 'Photoes/',
  communication: 'Comunication/',
  payment: 'Payment/',
  transaction: 'Transaction/',
}

export const endpoints = {
  commGet: baseURL + controllers.communication,

  payment: baseURL + controllers.payment,

  imageGetAll: baseURL + controllers.image,
  imageAdd: baseURL + controllers.image + "add",
  imageRemove: baseURL + controllers.image + "remove",
  imageUpdate: baseURL + controllers.image + "update",

  transactionGet: baseURL + controllers.transaction,
  transactionAddItems: baseURL + controllers.transaction + 'add_items',
  transactionAdd: baseURL + controllers.transaction + 'add_transaction',
  transactionUpdate: baseURL + controllers.transaction + 'update',
  transactionGetAddress: baseURL + controllers.transaction + 'address',

}