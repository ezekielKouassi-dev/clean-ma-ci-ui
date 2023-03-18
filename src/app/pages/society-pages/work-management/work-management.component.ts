import { Component, OnInit } from '@angular/core';
import { NzModalService } from 'ng-zorro-antd/modal';
import { RegisterAssignmentComponent } from 'src/app/components/register-assignment/register-assignment.component';
import { societyService } from 'src/app/services/api-consumer/processing-society.service';
import { ReloadService } from 'src/app/services/observable/reload.service';

@Component({
  selector: 'app-work-management',
  templateUrl: './work-management.component.html',
  styleUrls: ['./work-management.component.scss']
})
export class WorkManagementComponent implements OnInit {
  data: any;

  constructor(
    private modalService: NzModalService,
    private reload: ReloadService,
    private societyService: societyService
  ) { }

  ngOnInit(): void {
    this.loadTable();
    this.reload.isClicked$.subscribe((response)=>{
      if(response) this.loadTable()
    })
  }

  openModal() {
    const modalConfig = {
      nzTitle: 'Publier une mission',
      nzContent: RegisterAssignmentComponent,
      nzFooter: null
    };
    const modalRef = this.modalService.create(modalConfig);
    modalRef.afterClose.subscribe(result => {
      console.log(result)
    });
  }

  loadTable() {
    this.societyService.getAllAssignment().subscribe({
      next: (response: any) => {
        console.log(response)
        if (response.status == 200) {
          this.data = response.data
        }
      },
      error: (err)=> {
        console.log(err);
      }
    })
  }

}
