import AirtableDataSource from "../lib/AirtableDataSource"

export default class VolunteerDataSource extends AirtableDataSource {
  constructor() {
    super("People", "Last Name")
  }
}
