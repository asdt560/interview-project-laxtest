import { Injectable } from '@angular/core';



@Injectable({
  providedIn: 'root'
})
export class FoiaService {
  state: any;
  constructor() { }
  async getTableData(pagination = 10) {
    let url = `
    https://api.foia.gov/api/agency_components?&fields[agency_component]
    =title,abbreviation,website,submission_address&page[limit]=${pagination}
    &api_key=ANGEk6xvXLikq4N0ozb0Nz5RaxpryLJXjqSYaynY`
    const data = await fetch(url)
    console.log(data)
    this.state = await data.json()
    return this.state
  }
}
