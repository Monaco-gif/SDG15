import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ChartData } from '../models/chart.model';
import { Terrestrial } from '../models/terrestrial.model';

@Component({
  selector: 'app-terrestrial',
  templateUrl: './terrestrial.component.html',
  styleUrls: ['./terrestrial.component.css']
})
export class TerrestrialComponent implements OnInit {

  obsTerrestrial:Observable<Terrestrial[]>
  chartData = [];
  chartDataArray = [];

  constructor(public http: HttpClient) { 

  }
  TerrestrialData = (data: Terrestrial[]) => {
   
    console.log(data);
    for (var i in data) {
      this.chartData.push([
        data[i]['Entity'],
        data[i]['Terrestrial_protected_areas(% of total land area)'],
      ]);
    }
    this.chartDataArray = [];
    this.chartDataArray.push(new ChartData('EN_MAR_BEALITSQ', 'GeoChart', this.chartData, ['Entity', 'Terrestrial_protected_areas(% of total land area)'], {}));
  }

  ngOnInit(): void {
    this.obsTerrestrial = this.http.get<Terrestrial[]>(
      'https://5000-monacogif-sdg15-7r0hfp7msxd.ws-eu30.gitpod.io/Terrestrial_area'
    );
    this.obsTerrestrial.subscribe(this.TerrestrialData);
    }

}
