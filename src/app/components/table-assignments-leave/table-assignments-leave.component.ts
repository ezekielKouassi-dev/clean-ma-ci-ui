import { Component, OnInit } from '@angular/core';
import { UserConsumerService } from 'src/app/services/api-consumer/api-user-consumer.service';

@Component({
  selector: 'app-table-assignments-leave',
  templateUrl: './table-assignments-leave.component.html',
  styleUrls: ['./table-assignments-leave.component.scss']
})
export class TableAssignmentsLeaveComponent implements OnInit {
  dtOptions: DataTables.Settings = {}
  assignments : any;

  constructor(private userConsumer : UserConsumerService) { }

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

  loadDataTable() {
    this.userConsumer.getListOfUserAssignments('leave').subscribe({
      next : (response : any) => {
        console.log(response);
        if(response.status == 200) {
          this.assignments = response.data;
        }
      },
      error : (err) => {
        console.log(err);
      }
    });
  }
}
