import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { ChartData } from '../models/chart.model';
import { ForestArea } from '../models/forest_area.model';

@Component({
  selector: 'app-forest',
  templateUrl: './forest.component.html',
  styleUrls: ['./forest.component.css']
})
export class ForestComponent implements OnInit {
  obsforestarea: Observable<ForestArea[]>
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
  forestareaData = (data: ForestArea[]) => {

    console.log(data);
    for (var i in data) {
      this.chartData.push([
        data[i]['Entity'],
        data[i]['Forest_cover'],
      ]);
    }
    this.chartDataArray = [];
    this.chartDataArray.push(new ChartData('EN_MAR_BEALITSQ', 'GeoChart', this.chartData, ['Entity', 'Forest_cover'], this.options));
  }

  ngOnInit(): void {
    this.obsforestarea = this.http.get<ForestArea[]>( environment.urlserver + '/forest_area' );
    this.obsforestarea.subscribe(this.forestareaData);
  }
}

