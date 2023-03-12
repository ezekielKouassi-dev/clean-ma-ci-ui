import { Component, OnInit } from '@angular/core';
import { UserConsumerService } from 'src/app/services/api-consumer/api-user-consumer.service';

@Component({
  selector: 'app-work-leave',
  templateUrl: './work-leave.component.html',
  styleUrls: ['./work-leave.component.scss']
})
export class WorkLeaveComponent implements OnInit{
  data: any;

  constructor(private userConsumer : UserConsumerService) {}

  ngOnInit(): void {
    this.userConsumer.getListOfUserAssignments('leave').subscribe({
      next : (response : any) => {
        console.log(response);
        if(response.status == 200) {
          this.data = response.data;
        }
      },
      error : (err) => {
        console.log(err);
      }
    });
  }
}
