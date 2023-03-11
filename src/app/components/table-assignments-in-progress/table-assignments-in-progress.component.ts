import { Component, OnInit } from '@angular/core';
import { UserConsumerService } from 'src/app/services/api-consumer/api-user-consumer.service';

@Component({
  selector: 'app-table-assignments-in-progress',
  templateUrl: './table-assignments-in-progress.component.html',
  styleUrls: ['./table-assignments-in-progress.component.scss']
})
export class TableAssignmentsInProgressComponent implements OnInit {
  dtOptions: DataTables.Settings = {};
  assignments: any;

  constructor(private userConsumer: UserConsumerService) { }

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
    this.userConsumer.getListOfUserAssignmentsInProgress().subscribe({
      next: (response) => {
        console.log(response);
        this.assignments = response;
      },
      error: (err) => {
        console.log(err);
      }
    })
  }

  leave(assignment : any) {
    console.log(assignment);
  }
}
