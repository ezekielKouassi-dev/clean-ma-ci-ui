import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { NzButtonSize } from 'ng-zorro-antd/button';
import { NzModalRef, NzModalService } from 'ng-zorro-antd/modal';
import { UserConsumerService } from 'src/app/services/api-consumer/api-user-consumer.service';
import { NotificationService } from 'src/app/services/functions/notifications.service';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent {
  @Input() header!: string[];
  @Input() datas: any[] = [];
  @Input() buttons: string[] = ['modifier', 'supprimer'];
  @Input() type?: string;
  @Output() event = new EventEmitter<boolean>();
  dtOptions: any = {};
  size: NzButtonSize = 'large';
  pageSize = 5
  pageIndex = 1
  confirmModal!: NzModalRef;

  p: number = 1;

  constructor(
    private userConsumer: UserConsumerService,
    private notification: NotificationService,
    private modal: NzModalService
  ) { }

  ngOnInit(): void {
    // setTimeout(()=>{                          
    //   $('#table').DataTable( {
    //     pagingType: 'full_numbers',
    //     pageLength: 5,
    //     processing: true,
    //     lengthMenu : [5, 10, 25],
    //     order:[[1,"desc"]]
    // } );
    // }, 1);
  }

  accept(data: any) {
    console.log(data);
    this.userConsumer.acceptAssignment(data.assignmentId).subscribe({
      next: (response: any) => {
        console.log(response);
        if (response.status == 200) {
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

  leave(data: any) {

    this.confirmModal = this.modal.confirm({
      nzTitle: 'Voulez-vous vraiment abandonner ce travail?',
      nzContent: 'Si vous le faites, vous ne pourrez plus venir en arrière ainsi vous perdrez tout vos avantages.',
      nzOnOk: () => {
        return this.userConsumer.leaveAssignment(data.assignmentId).subscribe({
          next: (response: any) => {
            console.log(response);
            if (response.status == 200) {
              this.notification.createNotification('success', 'Travaux abondonné', "vous venez d'abandonner des travaux.");
              this.reloadPage();
            } else {
              this.notification.createNotification('error', 'Abandon impossible', 'Désolé vous ne pouvez pas abandonner maintenant...')
            }
          },
          error: (err) => {
            console.log(err);
            this.notification.createNotification('error', 'SERVER ERROR', 'SERVER ERROR');
          }
        });;
      }
    });
    return null;
  }

  reloadPage() {
    this.event.emit(true);
  }
}
