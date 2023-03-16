import { Component, OnInit } from '@angular/core';
import { UserConsumerService } from 'src/app/services/api-consumer/api-user-consumer.service';

@Component({
  selector: 'app-work-in-progress',
  templateUrl: './work-in-progress.component.html',
  styleUrls: ['./work-in-progress.component.scss']
})
export class WorkInProgressComponent implements OnInit{
  data: any;

  constructor(private userConsumer : UserConsumerService) {}

  ngOnInit(): void {
    this.loadPage();
  }

  loadPage(status: boolean = true) {

    if(status) {
      this.userConsumer.getListOfUserAssignments('in progress').subscribe({
        next: (response : any) => {
          console.log(response);
          this.data = response.data;
        },
        error: (err) => {
          console.log(err);
        }
      });
    }
    
  }
}
