import { Component, OnInit } from '@angular/core';
import { UserConsumerService } from 'src/app/services/api-consumer/api-user-consumer.service';
import { NotificationService } from 'src/app/services/functions/notifications.service';

@Component({
  selector: 'app-table-assignments-in-progress',
  templateUrl: './table-assignments-in-progress.component.html',
  styleUrls: ['./table-assignments-in-progress.component.scss']
})
export class TableAssignmentsInProgressComponent implements OnInit {
  dtOptions: DataTables.Settings = {};
  assignments: any;

  constructor(private userConsumer: UserConsumerService, private notification : NotificationService) { }

  ngOnInit(): void {
    this.dtOptions = {
      pagingType: 'full_number',
      pageLength: 10,
      paging: false,
      processing: true,
      autoWidth: true,
      serverSide: false,
      responsive: true
    }
    this.loadDataTable();
    
  }

  leave(assignment : any) {
    return this.userConsumer.leaveAssignment(assignment.assignmentId).subscribe({
      next : (response : any) => {
        console.log(response);
        if(response.status == 200) {
          this.notification.createNotification('success', 'Travaux abondonné', "vous venez d'abandonner des travaux.");
        }else {
          this.notification.createNotification('error', 'Abandon impossible', 'Désolé vous ne pouvez pas abandonner maintenant...')
        }
      },
      error : (err) => {
        console.log(err);
        this.notification.createNotification('error', 'SERVER ERROR', 'SERVER ERROR');
      }
    });
    console.log(assignment);
  }

  loadDataTable() {
    this.userConsumer.getListOfUserAssignments('in progress').subscribe({
      next: (response : any) => {
        console.log(response);
        this.assignments = response.data;
      },
      error: (err) => {
        console.log(err);
      }
    });
  }
}
