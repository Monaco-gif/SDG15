import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ForestArea } from '../models/forest_area.model';

@Component({
  selector: 'app-forest',
  templateUrl: './forest.component.html',
  styleUrls: ['./forest.component.css']
})
export class ForestComponent implements OnInit {
  obsforestarea:Observable<ForestArea[]>

  constructor(public http: HttpClient) { 

  }
  forestareaData = (data: ForestArea[]) => {
   
    console.log(data);
    /*for (var i in data) {
      this.chartData.push([
        data[i]['Entity'],
        Math.log(parseInt(String(data[i]['EN_MAR_BEALITSQ']))),
        `
        <div>
        <h4 style="color: #6F016A;">${parseInt(
          String(data[i]['EN_MAR_BEALITSQ'])
        ).toLocaleString('de-DE')} plastic items per square km </h4>
        <p style="margin-top: -12px">${String(data[i]['Year'])}</p>
        </div>
        `,
      ]);
    }*/
  }
  ngOnInit(): void {
    this.obsforestarea = this.http.get<ForestArea[]>(
      'https://5000-monacogif-sdg15-t5tx8vknusp.ws-eu30.gitpod.io/forest_area'
    );
    this.obsforestarea.subscribe(this.forestareaData);
    }
}

