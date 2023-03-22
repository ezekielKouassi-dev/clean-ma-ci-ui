import { Component, OnInit } from '@angular/core';
import { UserConsumerService } from 'src/app/services/api-consumer/api-user-consumer.service';

@Component({
  selector: 'app-statistics',
  templateUrl: './statistics.component.html',
  styleUrls: ['./statistics.component.scss']
})
export class StatisticsComponent implements OnInit{
  dblStatsAssignmentProgress!: number;
  dblStatsAssignmentCompleted!: number;
  dblStatsAssignmentLeave!: number
  data: any = []

  constructor(private userConsumer: UserConsumerService) {}

  ngOnInit(): void {
    this.userConsumer.getStats().subscribe({
      next: (response: any) => {
        console.log(response);
        if (response.status == 200) {
          this.dblStatsAssignmentProgress = response.dblStatsAssignmentProgress as number;
          this.dblStatsAssignmentCompleted = response.dblStatsAssignmentCompleted as number;
          this.dblStatsAssignmentLeave = response.dblStatsAssignmentLeave as number;

          this.data.push(this.dblStatsAssignmentCompleted);
          this.data.push(this.dblStatsAssignmentLeave);
          this.data.push(this.dblStatsAssignmentProgress);
        }
      }
    })
  }
}
