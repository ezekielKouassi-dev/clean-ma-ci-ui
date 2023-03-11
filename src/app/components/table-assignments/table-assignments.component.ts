import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

import { NzTableFilterFn, NzTableFilterList, NzTableSortFn, NzTableSortOrder } from 'ng-zorro-antd/table';
import { Subject } from 'rxjs';
import { UserConsumerService } from 'src/app/services/api-consumer/api-user-consumer.service';
import { NotificationService } from 'src/app/services/functions/notifications.service';

interface DataItem {
  name: string;
  age: number;
  address: string;
}

interface ColumnItem {
  name: string;
  sortOrder: NzTableSortOrder | null;
  sortFn: NzTableSortFn<DataItem> | null;
  listOfFilter: NzTableFilterList;
  filterFn: NzTableFilterFn<DataItem> | null;
}

@Component({
  selector: 'app-table-assignments',
  templateUrl: './table-assignments.component.html',
  styleUrls: ['./table-assignments.component.css']
})
export class TableAssignmentsComponent implements OnInit {

  dtOptions: DataTables.Settings = {};
  assignments: any;
  selectedRow : any;

  constructor(private userConsumer: UserConsumerService, private notification : NotificationService) { }

  ngOnInit(): void {
    this.dtOptions= {
      pagingType: 'full_number',
      pageLength : 10,
      paging : false,
      processing: true,
      autoWidth: true,
      serverSide: false,
      responsive: true
    }

    this.userConsumer.getListOfAssignment().subscribe({
      next: (response) => {
        console.log(response)
        this.assignments = response;
        console.log("assignments : ---->", this.assignments)
      },
      error: (err) => {
        console.log(err);
      }
    })
  }

  accept(row : any) {
    this.selectedRow = row;
    console.log(this.selectedRow);
    this.userConsumer.acceptAssignment(this.selectedRow.assignmentId).subscribe({
      next: (response : any) => {
        console.log(response);
        if(response.status == 200) {
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

}
