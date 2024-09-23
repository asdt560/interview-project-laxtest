import { Injectable } from '@angular/core';
import { TableData, TableRowsData } from '../types/table';
import { environment } from '../../environments/environment.development';


@Injectable({
  providedIn: 'root'
})
export class FoiaService {
  apiKey : string = '&api_key='+ environment.api_key
  links : TableData["links"] | null = null;
  tableData: TableRowsData["attributes"][] | null = null;
  constructor() { }
  async getTableData(pagination : number) {
    let url = `
      https://api.foia.gov/api/agency_components?&fields[agency_component]
      =title,abbreviation,website,submission_address&page[limit]=${pagination}`
    + this.apiKey
    const data : TableData = await fetch(url).then((resp) => resp.json())
    if(data) {
      console.log(data)
      this.tableData = data.data.map(({attributes}) => attributes);
      this.links = data.links;
      return this.tableData;
    } else {
      return null;
    }
  }

  async changePage(url: string, pagination? : number) {
    if(pagination) {
      url = url.slice(0, -2) + pagination
    }
    console.log(url)
    const data : TableData = await fetch(url + this.apiKey).then((resp) => resp.json())
    if(data) {
      console.log(data)
      this.tableData = data.data.map(({attributes}) => attributes);
      this.links = data.links;
      return this.tableData;
    } else {
      return null;
    }
  }
}
