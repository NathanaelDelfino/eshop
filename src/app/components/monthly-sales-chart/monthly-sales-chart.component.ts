import { Component, AfterViewInit } from '@angular/core';
import { DataService } from 'src/app/data.services';

declare var Chart: any;


@Component({
  selector: 'app-monthly-sales-chart',
  templateUrl: './monthly-sales-chart.component.html',
  styleUrls: ['./monthly-sales-chart.component.scss'],
})
export class MonthlySalesChartComponent implements AfterViewInit {
  public data: any = null;
  constructor(
    private servie: DataService
  ) { }

  ngAfterViewInit() {
    this.servie
      .getMonthlySalesChartData().subscribe((res) => {
        this.data = res;
        this.render();
      });

  }

  render() {
    var e1: any = document.getElementById('myChart');
    var ctx = e1.getContext('2d');
    var myChart = new Chart(ctx, {
      type: 'line',
      data: this.data,
      options: {
        scales: {
          yAxes: [{
            tick: {
              beginAtZero: true
            }
          }]
        }
      }
    })

  }
}
