import { Component, OnInit } from '@angular/core';

declare var Chart: any;


@Component({
  selector: 'app-monthly-sales-chart',
  templateUrl: './monthly-sales-chart.component.html',
  styleUrls: ['./monthly-sales-chart.component.scss'],
})
export class MonthlySalesChartComponent implements OnInit {
  public data: any = null;
  constructor() { }

  ngOnInit() { }

}
