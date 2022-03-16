import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { ChartData } from '../models/chart.model';
import { RedList } from '../models/red-list.model';

@Component({
  selector: 'app-red-list',
  templateUrl: './red-list.component.html',
  styleUrls: ['./red-list.component.css']
})
export class RedListComponent implements OnInit {
  obsRedList:Observable<RedList[]>
  chartData = [];
  chartDataArray = [];

  constructor(public http: HttpClient) { 

  }
  RedListData = (data: RedList[]) => {
   
    console.log(data);
    for (var i in data) {
      this.chartData.push([
        data[i]['Entity'],
        data[i]['Red_List_Index-ER_RSK_LST'],
      ]);
    }
    this.chartDataArray = [];
    this.chartDataArray.push(new ChartData('EN_MAR_BEALITSQ', 'GeoChart', this.chartData, ['Entity', 'Red_List_Index-ER_RSK_LST'], {}));
  }

  ngOnInit(): void {
    this.obsRedList= this.http.get<RedList[]>( environment.urlserver + '/Red_List_Index' );
    this.obsRedList.subscribe(this.RedListData);
    }
}
