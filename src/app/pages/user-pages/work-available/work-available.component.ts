import { Component, OnInit } from '@angular/core';
import { UserConsumerService } from 'src/app/services/api-consumer/api-user-consumer.service';
import { ReloadService } from 'src/app/services/observable/reload.service';

@Component({
  selector: 'app-work-available',
  templateUrl: './work-available.component.html',
  styleUrls: ['./work-available.component.scss']
})
export class WorkAvailableComponent implements OnInit{

  data: any;

  constructor(private userConsumer : UserConsumerService, private reload: ReloadService) { }

  ngOnInit(): void {
    this.sender();
    this.reload.assignmentRegister$.subscribe((response)=>{
      if(response) this.sender()
    })
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
