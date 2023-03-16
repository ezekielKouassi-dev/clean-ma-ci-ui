import { Component, OnInit } from '@angular/core';
import { UserConsumerService } from 'src/app/services/api-consumer/api-user-consumer.service';

@Component({
  selector: 'app-work-available',
  templateUrl: './work-available.component.html',
  styleUrls: ['./work-available.component.scss']
})
export class WorkAvailableComponent implements OnInit{

  data: any;

  constructor(private userConsumer : UserConsumerService) { }

  ngOnInit(): void {
    this.sender();
  }

  sender() {
    this.userConsumer.getListOfAssignment().subscribe({
      next: (response: any) => {
        console.log(response)
        this.data = response.data;
        console.log('data------>>', this.data)
      },
      error: (err : any) => {
        console.log(err);
      }
    });
  }

  reloadPage(status: boolean) {
    if(status){
      this.sender();
    } 
  }

}
