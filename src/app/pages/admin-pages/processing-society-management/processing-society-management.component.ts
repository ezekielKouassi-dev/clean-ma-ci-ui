import { Component } from '@angular/core';
import { NzModalService } from 'ng-zorro-antd/modal';
import { RegisterSocietyComponent } from 'src/app/components/register-society/register-society.component';

@Component({
  selector: 'app-processing-society-management',
  templateUrl: './processing-society-management.component.html',
  styleUrls: ['./processing-society-management.component.scss']
})
export class ProcessingSocietyManagementComponent {
  constructor(private modalService : NzModalService) {}

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
}
