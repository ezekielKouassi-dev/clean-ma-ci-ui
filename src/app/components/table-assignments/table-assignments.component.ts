import { Component, OnInit } from '@angular/core';
import { UserConsumerService } from 'src/app/services/api-consumer/api-user-consumer.service';
import { NotificationService } from 'src/app/services/functions/notifications.service';
import * as $ from 'jquery';
import { StorageService } from 'src/app/services/storage/storage.service';



@Component({
  selector: 'app-table-assignments',
  templateUrl: './table-assignments.component.html',
  styleUrls: ['./table-assignments.component.css']
})
export class TableAssignmentsComponent implements OnInit {

  dtOptions: DataTables.Settings = {};
  assignments: any;
  selectedRow: any;

  constructor(
    private userConsumer: UserConsumerService,
    private notification: NotificationService) { }

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

    this.userConsumer.getListOfAssignment().subscribe({
      next: (response: any) => {
        console.log(response)
        this.assignments = response.data;
        console.log('data------>>', this.assignments)
      },
      error: (err) => {
        console.log(err);
      }
    })
  }

  accept(row: any) {
    this.selectedRow = row;
    console.log(this.selectedRow);
    this.userConsumer.acceptAssignment(this.selectedRow.assignmentId).subscribe({
      next: (response: any) => {
        console.log(response);
        if (response.status == 200) {
          this.notification.createNotification('success', 'Mission accepté', response.message);
        } else {
          this.notification.createNotification('danger', 'Echec', response.message);
        }
      },
      error: (err) => {
        console.log(err)
      }
    });
  }

  // ngAfterViewInit(): void {
  //   $('#datatableAssignments').DataTable({
  //     pagingType: 'full_number',
  //     pageLength: 10,
  //     paging: false,
  //     processing: true,
  //     autoWidth: true,
  //     serverSide: false,
  //     responsive: true,
  //     ajax : {
  //       url : 'localhost:9092/api/v1/assignments/available/user/3',
  //       dataSrc : 'data'
  //     },
  //     columns: [
  //       {data : 'assignmentId'},
  //       {data : 'assignmentDescription'},
  //       {data : 'numberOfAdherent'},
  //       {data : 'numberOfAcceptation'},
  //       {data : 'reward'},
  //       {data : ''},
  //     ]
  //   });
  // }

}
