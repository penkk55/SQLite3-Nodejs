const model = {}
module.exports = model
const table = require('./tables')

model.insert = () => {

}
model.select_code = () => {

  return `SELECT rowid AS id,* FROM ${table.code} ;`
}
model.select_corp = () => {

  return `SELECT rowid AS id,* FROM ${table.corp} ;`
}
model.select_product = () => {

  return `SELECT rowid AS id,* FROM ${table.product} ;`
}
model.q1 = () => {

  return `SELECT rowid AS id,* FROM ${table.code} ;`
}