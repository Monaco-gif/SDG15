import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Biodiversity } from '../models/Biodiversity.model';
import { ChartData } from '../models/chart.model';

@Component({
  selector: 'app-biodiversity',
  templateUrl: './biodiversity.component.html',
  styleUrls: ['./biodiversity.component.css']
})

export class BiodiversityComponent implements OnInit {

  obsBiodiversity: Observable<Biodiversity[]>
  chartData = [];
  chartDataArray = [];

  options = {
    // volendo si puo cambiare anche le dimensioni. guardare sdg14 palo
    colorAxis: {
      //il primo colore sara quello piu a sinistra nella legenda. l ultimo quello piu a destra.
      colors: [
        'orange',
        'red',
        
      ]
    },
  };
 
  constructor(public http: HttpClient) {

  }
  BiodiversityData = (data: Biodiversity[]) => {

    console.log(data);
    for (var i in data) {
      this.chartData.push([
        data[i]['Entity'],
        data[i]['Countries_that_established_national_targets_in_accordance_with_Aichi_Biodiversity_Target_2_of_the_Strategic_Plan_for_Biodiversity_2011-2020_in_their_National_Biodiversity_Strategy_and_Action_Plans_(1 = YES; 0 = NO)-ER_BDY_ABT2NP-National_target_reflecting_ABT2_exists_and_progress_is_on_track_to_achieve_it'],
      ]);
    }
    this.chartDataArray = [];
    this.chartDataArray.push(new ChartData('EN_MAR_BEALITSQ', 'GeoChart', this.chartData, ['Entity', 'Progress'], this.options));
  }

  ngOnInit(): void {
    this.obsBiodiversity = this.http.get<Biodiversity[]>(
      'https://5000-monacogif-sdg15-uzanuntn7mj.ws-eu34.gitpod.io/Biodiversity'
    );
    this.obsBiodiversity.subscribe(this.BiodiversityData);
  }
}
