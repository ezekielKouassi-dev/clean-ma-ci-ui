import { Component, OnInit } from '@angular/core';
import { NzModalService } from 'ng-zorro-antd/modal';
import { RegisterSocietyComponent } from 'src/app/components/register-society/register-society.component';
import { AdminConsumerService } from 'src/app/services/api-consumer/api-admin-consumer.service';

@Component({
  selector: 'app-processing-society-management',
  templateUrl: './processing-society-management.component.html',
  styleUrls: ['./processing-society-management.component.scss']
})
export class ProcessingSocietyManagementComponent implements OnInit {
  data: any;

  constructor(private modalService: NzModalService, private adminConsumer: AdminConsumerService) { }

  ngOnInit(): void {
    this.loadTable();
  }

  openModal() {
    const modalConfig = {
      nzTitle: 'Enregistrer une société de traitement',
      nzContent: RegisterSocietyComponent,
      nzFooter: null
    };
    const modalRef = this.modalService.create(modalConfig);
    modalRef.afterClose.subscribe(result => {
      // Récupérer les données entrées par l'utilisateur ici
      console.log(result)
    });
  }

  loadTable() {
    this.adminConsumer.getAllProcessingCompany().subscribe({
      next: (response: any) => {
        if (response.status == 200) {
          this.data = response.data
        } else {
          console.log(response.message)
        }
      },
      error: (err) => {
        console.log(err);
      }
    })
  }
}
