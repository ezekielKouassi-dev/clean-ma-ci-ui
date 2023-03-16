import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { NzButtonSize } from 'ng-zorro-antd/button';
import { UserConsumerService } from 'src/app/services/api-consumer/api-user-consumer.service';
import { NotificationService } from 'src/app/services/functions/notifications.service';

@Component({
  selector: 'app-assignment',
  templateUrl: './assignment.component.html',
  styleUrls: ['./assignment.component.scss']
})
export class AssignmentComponent implements OnInit{
  @Input() data : any
  @Output() event = new EventEmitter<boolean>();
  size: NzButtonSize = 'large';

  constructor(private userConsumer: UserConsumerService, private notification: NotificationService) {}
  
  ngOnInit(): void {
    
  }

  accept(data: any) {
    console.log(data);
    this.userConsumer.acceptAssignment(data.assignmentId).subscribe({
      next: (response: any) => {
        console.log(response);
        if (response.status == 200) {
          this.notification.createNotification('success', 'Mission accepté', response.message);
          this.event.emit(true);
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
