import { Component, OnInit } from '@angular/core';
import * as Chart from 'chart.js';

@Component({
  selector: 'app-stats',
  templateUrl: './stats.component.html',
  styleUrls: ['./stats.component.scss']
})
export class StatsComponent implements OnInit{

  ngOnInit(): void {
      let pieChart = new Chart('pieChart', {
        type: 'pie',
        data: {
          labels: ['Label 1', 'Label 2', 'Label 3'],
          datasets: [{
            label: 'My Dataset',
            data: [30, 50, 20],
            backgroundColor: [
              'rgb(255, 99, 132)',
              'rgb(54, 162, 235)',
              'rgb(255, 205, 86)'
            ]
          }]
        }
      });
  }
}
