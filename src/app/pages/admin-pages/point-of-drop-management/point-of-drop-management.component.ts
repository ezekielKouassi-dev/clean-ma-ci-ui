import { Component, OnInit } from '@angular/core';
import { NzModalService } from 'ng-zorro-antd/modal';
import { RegisterPointOfDropComponent } from 'src/app/components/register-point-of-drop/register-point-of-drop.component';

@Component({
  selector: 'app-point-of-drop-management',
  templateUrl: './point-of-drop-management.component.html',
  styleUrls: ['./point-of-drop-management.component.scss']
})
export class PointOfDropManagementComponent implements OnInit{
  constructor(private modalService: NzModalService) {}

  ngOnInit(): void {
      
  }

  openModal() {
    const modalConfig = {
      nzTitle: 'Enregistrement des points de dépôts',
      nzContent: RegisterPointOfDropComponent,
      nzFooter: null
    };
    const modalRef = this.modalService.create(modalConfig);
  }
}
