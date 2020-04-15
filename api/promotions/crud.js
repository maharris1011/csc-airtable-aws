import handler from "../lib/handler-lib"
import Promotion from "./Promotion"
import AirtableDataSource from "./airtableDataSource"
import AirtableTransformer from "./airtableTransformer"

let dataSource = new AirtableDataSource()
let transformer = new AirtableTransformer()
let promotion = new Promotion(dataSource, transformer)

let create = handler(async (event, context) => {
  const data = JSON.parse(event.body)
  let retval = await promotion.create(
    data.Business, data.Promo, data.Website
    )
  return retval
})

let list = handler(async (event, context) => {
  let retval = await promotion.list()
  return retval
})

export { create, list }
