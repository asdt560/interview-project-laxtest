import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { FoiaService } from '../../services/foia.service';
import { TableRow, TableRowsData } from '../../types/table';
import { MatTableModule } from '@angular/material/table';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';

@Component({
  selector: 'app-main',
  standalone: true,
  imports: [MatTableModule, MatPaginatorModule, FormsModule],
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

  createTable(data: TableRowsData["attributes"][]) {
    this.tableRows = []
    data.forEach((obj) => {
      this.tableRows.push({
        title: `${obj.title} (${obj.abbreviation})`,
        website: obj.website? {
          title: 
          obj.website.uri? obj.website.title? 
          obj.website.title : 'Website' : 'No Website',
          uri: obj.website.uri? obj.website.uri: ""
        } : {title: 'No Website'},
        address: obj.submission_address? `
          ${obj.submission_address.address_line1}, 
          ${obj.submission_address.address_line2}, 
          ${obj.submission_address.locality}, 
          ${obj.submission_address.administrative_area} 
          ${obj.submission_address.postal_code}, 
          ${obj.submission_address.country_code}`: "No Address"
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
