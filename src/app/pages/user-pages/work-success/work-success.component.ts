import { Component, OnInit } from '@angular/core';
import { UserConsumerService } from 'src/app/services/api-consumer/api-user-consumer.service';

@Component({
  selector: 'app-work-success',
  templateUrl: './work-success.component.html',
  styleUrls: ['./work-success.component.scss']
})
export class WorkSuccessComponent implements OnInit {
  data: any
  constructor(private userConsumer: UserConsumerService) { }

  ngOnInit(): void {
    this.userConsumer.getListOfUserAssignments('completed').subscribe({
      next: (response: any)=>{
        console.log(response);
        if(response.status == 200) {
          this.data = response.data;
        }
      },
      error: (err)=>{
        console.log(err);
      }
    })
  }
}
