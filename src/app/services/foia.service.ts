import { Injectable } from '@angular/core';
import { agencyData, TableData, TableRowsData } from '../types/table';
import { environment } from '../../environments/environment.development';


@Injectable({
  providedIn: 'root'
})
export class FoiaService {
  apiKey : string = '&api_key='+ environment.api_key

  links : TableData["links"] | null = null;

  tableData: TableRowsData[] | null = null;

  agencyData : agencyData["data"] | null = null;
  constructor() { }
  async getTableData(pagination : number) {
    let url = `
      https://api.foia.gov/api/agency_components?&fields[agency_component]
      =title,abbreviation,website,submission_address&page[limit]=${pagination}`
    + this.apiKey
    const data : TableData = await fetch(url).then((resp) => resp.json())
    if(data) {
      console.log(data)
      this.tableData = data.data
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
      this.tableData = data.data
      this.links = data.links;
      return this.tableData;
    } else {
      return null;
    }
  }

  async getAgencyData(id: string) {
    let url = "https:\/\/api.foia.gov\/api\/agency_components\/"+id+"?"
    const data : agencyData = await fetch(url + this.apiKey).then((resp) => resp.json())
    if(data) {
      this.agencyData = data.data;
      return this.agencyData;
    } else {
      return null;
    }
  }
}
