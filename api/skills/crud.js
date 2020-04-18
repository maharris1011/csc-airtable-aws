import handler from "../lib/handler-lib"
import Skill from "./Skill"
import AirtableDataSource from "./skillDataSource"
import AirtableTransformer from "./airtableTransformer"

let dataSource = new AirtableDataSource()
let transformer = new AirtableTransformer()
let skill = new Skill(dataSource, transformer)

let list = handler(async (event, context) => {
  let retval = await skill.list()
  return retval
})

let read = handler(async (event, context) => {
  let retval = await skill.read(event.pathParameters.id)
  return retval
})

export { list, read }
