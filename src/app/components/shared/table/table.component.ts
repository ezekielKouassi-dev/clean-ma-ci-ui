import { Component, Input, OnInit } from '@angular/core';
import { NzButtonSize } from 'ng-zorro-antd/button';
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
  size: NzButtonSize = 'large';

  p: number = 1;

  constructor(
    private userConsumer : UserConsumerService,
    private notification : NotificationService
  ) {}

  ngOnInit(): void {

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
    console.log(data)
    return this.userConsumer.leaveAssignment(data.assignmentId).subscribe({
      next : (response : any) => {
        console.log(response);
        if(response.status == 200) {
          this.notification.createNotification('success', 'Travaux abondonné', "vous venez d'abandonner des travaux.");
        }else {
          this.notification.createNotification('error', 'Abandon impossible', 'Désolé vous ne pouvez pas abandonner maintenant...')
        }
      },
      error : (err) => {
        console.log(err);
        this.notification.createNotification('error', 'SERVER ERROR', 'SERVER ERROR');
      }
    });
  }
}
