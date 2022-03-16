import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Alien } from '../models/alien_species.model';
import { ChartData } from '../models/chart.model';

@Component({
  selector: 'app-alien-species',
  templateUrl: './alien-species.component.html',
  styleUrls: ['./alien-species.component.css']
})
export class AlienSpeciesComponent implements OnInit {
  obsAlien: Observable<Alien[]>
  chartData = [];
  chartDataArray = [];

  options = {
    // volendo si puo cambiare anche le dimensioni. guardare sdg14 palo
    colorAxis: {
      //il primo colore sara quello piu a sinistra nella legenda. l ultimo quello piu a destra.
      colors: [
        '#F7FCFD',
        'orange'
      ]
    },
  };
 
  constructor(public http: HttpClient) {

  }
  AlienData = (data: Alien[]) => {

    console.log(data);
    for (var i in data) {
      this.chartData.push([
        data[i]['Entity'],
        data[i]['Countries_with_an_allocation_from_the_national_budget_to_manage_the_threat_of_invasive_alien_species_(1 = YES, 0 = NO)-ER_IAS_NATBUD'],
      ]);
    }
    this.chartDataArray = [];
    this.chartDataArray.push(new ChartData('EN_MAR_BEALITSQ', 'GeoChart', this.chartData, ['Entity', 'Countries_with_an_allocation_from_the_national_budget_to_manage_the_threat_of_invasive_alien_species_(1 = YES, 0 = NO)-ER_IAS_NATBUD'], this.options));
  }

  ngOnInit(): void {
    this.obsAlien = this.http.get<Alien[]>( environment.urlserver + '/alien_species' );
    this.obsAlien.subscribe(this.AlienData);
  }

}
