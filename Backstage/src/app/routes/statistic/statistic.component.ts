import { Component, OnInit } from '@angular/core';
import { _HttpClient } from '@delon/theme';

@Component({
  selector: 'app-statistic',
  templateUrl: './statistic.component.html',
})
export class StatisticComponent implements OnInit {
  constructor(private http: _HttpClient) {}

  ngOnInit() {}
}
