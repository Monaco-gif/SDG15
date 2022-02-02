import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ChartData } from '../models/chart.model';
import { ForestArea } from '../models/forest_area.model';

@Component({
  selector: 'app-forest',
  templateUrl: './forest.component.html',
  styleUrls: ['./forest.component.css']
})
export class ForestComponent implements OnInit {
  obsforestarea:Observable<ForestArea[]>
  chartData = [];
  chartDataArray = [];

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
    this.chartDataArray.push(new ChartData('EN_MAR_BEALITSQ', 'GeoChart', this.chartData, ['Entity', 'Forest_cover'], {}));
  }

  ngOnInit(): void {
    this.obsforestarea = this.http.get<ForestArea[]>(
      'https://5000-monacogif-sdg15-t5tx8vknusp.ws-eu30.gitpod.io/forest_area'
    );
    this.obsforestarea.subscribe(this.forestareaData);
    }
}

