import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { FoiaService } from '../../services/foia.service';
import { TableRow, TableRowsData } from '../../types/table';
import { MatTableModule } from '@angular/material/table';
import { RouterModule } from '@angular/router'

@Component({
  selector: 'app-main',
  standalone: true,
  imports: [MatTableModule, FormsModule, RouterModule],
  templateUrl: './main.component.html',
  styleUrl: './main.component.css'
})
export class MainComponent {
  current: string | null = null;
  prev: string | null = null;
  next: string | null = null;

  tableRows : TableRow[] = [];

  paginationOption : string = "10";
  
  columns = ['title', 'website', 'address']
  foiaService = inject(FoiaService)

  constructor() {
    if(!this.foiaService.tableData) {
      this.getTableData(Number(this.paginationOption))
    } else {
      this.createTable(this.foiaService.tableData)
    }
  }

  async getTableData(pagination : number) {
    await this.foiaService.getTableData(pagination).then((data) => {
      if(data)
      this.createTable(data!)
      if(this.foiaService.links) {
        this.current = this.foiaService.links.self.href;
        this.next = this.foiaService.links.next.href;
      }
    })
  }

  createTable(data: TableRowsData[]) {
    this.tableRows = []
    data.forEach((obj) => {
      this.tableRows.push({
        title: `${obj.attributes.title} (${obj.attributes.abbreviation})`,
        website: obj.attributes.website? {
          title: 
          obj.attributes.website.uri? obj.attributes.website.title? 
          obj.attributes.website.title : 'Website' : 'No Website',
          uri: obj.attributes.website.uri? obj.attributes.website.uri: ""
        } : {title: 'No Website'},
        address: obj.attributes.submission_address? `
          ${obj.attributes.submission_address.address_line1}, 
          ${obj.attributes.submission_address.address_line2}, 
          ${obj.attributes.submission_address.locality}, 
          ${obj.attributes.submission_address.administrative_area} 
          ${obj.attributes.submission_address.postal_code}, 
          ${obj.attributes.submission_address.country_code}`: "No Address",
        id: obj.id
      })
    })
  }

  async changePage(forward : Boolean) {
    if(forward) {
      this.prev = this.current;
      await this.foiaService.changePage(this.next!, Number(this.paginationOption))
        .then((data) => {
          if(data)
          this.createTable(data)
          if(this.foiaService.links) {
            this.current = this.foiaService.links.self.href;
            this.next = this.foiaService.links.next.href;
          }
        })
    } else {
      await this.foiaService.changePage(this.prev!).then((data) => {
        if(data)
        this.createTable(data)
      })
    }
  }

  setPagination() {
    this.getTableData(Number(this.paginationOption))
  }
}
