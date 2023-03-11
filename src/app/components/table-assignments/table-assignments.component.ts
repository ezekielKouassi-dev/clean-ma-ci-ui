import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

import { NzTableFilterFn, NzTableFilterList, NzTableSortFn, NzTableSortOrder } from 'ng-zorro-antd/table';
import { Subject } from 'rxjs';
import { UserConsumerService } from 'src/app/services/api-consumer/api-user-consumer.service';

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

  constructor(private userConsumer: UserConsumerService, private http : HttpClient) { }

  ngOnInit(): void {
    this.dtOptions= {
      pagingType: 'full_number',
      pageLength : 10,
      paging : false,
      processing: true
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

}
