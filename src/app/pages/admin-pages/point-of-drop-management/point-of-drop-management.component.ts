import { Component, OnInit } from '@angular/core';
import { NzModalService } from 'ng-zorro-antd/modal';
import { RegisterPointOfDropComponent } from 'src/app/components/register-point-of-drop/register-point-of-drop.component';
import { AdminConsumerService } from 'src/app/services/api-consumer/api-admin-consumer.service';
import { ReloadService } from 'src/app/services/observable/reload.service';

@Component({
  selector: 'app-point-of-drop-management',
  templateUrl: './point-of-drop-management.component.html',
  styleUrls: ['./point-of-drop-management.component.scss']
})
export class PointOfDropManagementComponent implements OnInit {
  data: any;
  constructor(private modalService: NzModalService, private adminConsumer: AdminConsumerService, private reload: ReloadService) { }

  ngOnInit(): void {
    this.loadTable();
    this.reload.isClicked$.subscribe((response)=>{
      if(response) this.loadTable()
    })
  }

  openModal() {
    const modalConfig = {
      nzTitle: 'Enregistrement des points de dépôts',
      nzContent: RegisterPointOfDropComponent,
      nzFooter: null
    };
    const modalRef = this.modalService.create(modalConfig);
  }

  loadTable() {
    this.adminConsumer.getAllPointOfDrop().subscribe({
      next: (response: any) => {
        console.log(response);
        if (response.status == 200) {
          this.data = response.data;
        }else {}
      },
      error: (err)=>{
        console.log(err);
      }
    })
  }
}
