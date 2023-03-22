import { Component, Input, OnInit } from '@angular/core';
import * as Chart from 'chart.js';
import { UserConsumerService } from 'src/app/services/api-consumer/api-user-consumer.service';

@Component({
  selector: 'app-stats',
  templateUrl: './stats.component.html',
  styleUrls: ['./stats.component.scss']
})
export class StatsComponent implements OnInit {
  @Input() data?: any = []
  @Input() label?: any = []

  constructor(private userConsumer: UserConsumerService) { }

  ngOnInit(): void {
    let pieChart = new Chart('pieChart', {
      type: 'pie',
      data: {
        labels: this.label,
        datasets: [{
          label: 'My Dataset',
          data: this.data,
          backgroundColor: [
            'rgb(255, 99, 132)',
            'rgb(54, 162, 235)',
            'rgb(255, 205, 86)'
          ],
          fill: false
        }]
      }
    });
  }
}
