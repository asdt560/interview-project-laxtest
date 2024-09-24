import { Component, inject } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FoiaService } from '../../services/foia.service';
import { MatListModule } from '@angular/material/list'


@Component({
  selector: 'app-agency-details',
  standalone: true,
  imports: [MatListModule],
  templateUrl: './agency-details.component.html',
  styleUrl: './agency-details.component.css'
})
export class AgencyDetailsComponent {
  route : ActivatedRoute = inject(ActivatedRoute);
  id: string = this.route.snapshot.paramMap.get('agency_id') || '0'

  foiaService = inject(FoiaService)

  router = inject(Router)

  agencyRelations : string[] = []

  constructor () {
    if(this.id === '0') {
      this.router.navigateByUrl('')
    } else {
      this.getAgencyData()
    }
  }

  async getAgencyData() {
    await this.foiaService.getAgencyData(this.id).then((data) => {
      if(data)
      this.agencyRelations = Object.keys(data.relationships)
      console.log(this.agencyRelations)
    })
  }

}
