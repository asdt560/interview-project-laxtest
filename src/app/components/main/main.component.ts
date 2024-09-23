import { Component, inject } from '@angular/core';
import { MatTableModule } from '@angular/material/table'
import { FoiaService } from '../../services/foia.service';
import { TableData } from '../../types/table';

@Component({
  selector: 'app-main',
  standalone: true,
  imports: [MatTableModule],
  templateUrl: './main.component.html',
  styleUrl: './main.component.css'
})
export class MainComponent {
  tableData: TableData | undefined;
  foiaService = inject(FoiaService)

  constructor() {
    this.createTable()
  }

  async createTable() {
    await this.foiaService.getTableData()
    this.tableData = this.foiaService.state
    console.log(this.tableData)
  }
}
