import { Component, OnInit } from '@angular/core';
import { NzModalService } from 'ng-zorro-antd/modal';
import { RegisterLocalityComponent } from 'src/app/components/register-locality/register-locality.component';
import { AdminConsumerService } from 'src/app/services/api-consumer/api-admin-consumer.service';

@Component({
  selector: 'app-locality-management',
  templateUrl: './locality-management.component.html',
  styleUrls: ['./locality-management.component.scss']
})
export class LocalityManagementComponent implements OnInit{
  data: any;

  constructor(private modalService: NzModalService, private adminConsumer: AdminConsumerService) {}

  ngOnInit(): void {
    this.loadTable();
  }

  openModal() {
    const modalConfig = {
      nzTitle: 'Enregistrer une localité',
      nzContent: RegisterLocalityComponent,
      nzFooter: null
    };
    const modalRef = this.modalService.create(modalConfig);
    modalRef.afterClose.subscribe(result => {
      // Récupérer les données entrées par l'utilisateur ici
      console.log(result)
    });
  }

  loadTable() {
    this.adminConsumer.getAllLocality().subscribe({
      next: (response: any)=>{
        console.log(response)
        this.data = response.data
      },
      error: (err)=>{
        console.log(err);
      }
    })
  }
}
