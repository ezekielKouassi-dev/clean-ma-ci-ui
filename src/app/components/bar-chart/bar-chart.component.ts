import { Component, OnInit } from '@angular/core';
import * as Chart from 'chart.js';

@Component({
  selector: 'app-bar-chart',
  templateUrl: './bar-chart.component.html',
  styleUrls: ['./bar-chart.component.scss']
})
export class BarChartComponent implements OnInit {
  ngOnInit() {
    let myChart = new Chart('myChart', {
      type: 'line',
      data: {
        labels: ["Janvier", "Février", "Mars", "Avril", "Mai", "Juin"],
        datasets: [{
          label: "Taux de croissance des missions accomplies",
          data: [10, 20, 4, 7, 50, 60],
          fill: false,
          borderColor: '#bc4e9c',
          //tension: 0.1
        }]
      },
      options: {
        responsive: true,
        //maintainAspectRatio: false,
        title: {
          display: true,
          text: 'Taux de croissance des missions accomplies'
        }
      }
    });

    let lineChart = new Chart('lineChart', {
      type: 'line',
      data: {
        labels: ["Janvier", "Février", "Mars", "Avril", "Mai", "Juin"],
        datasets: [{
          label: "Taux de croissance des missions abandonnée",
          data: [100, 70, 36, 50, 70, 4],
          fill: false,
          borderColor: '#000428',
          //tension: 0.1
        }]
      },
      options: {
        responsive: true,
        //maintainAspectRatio: false,
        title: {
          display: true,
          text: 'Taux de croissance des missions abandonné'
        }
      }
    });
  }
}
