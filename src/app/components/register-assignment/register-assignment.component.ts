import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NzModalRef } from 'ng-zorro-antd/modal';
import { AdminConsumerService } from 'src/app/services/api-consumer/api-admin-consumer.service';
import { societyService } from 'src/app/services/api-consumer/processing-society.service';
import { NotificationService } from 'src/app/services/functions/notifications.service';
import { ReloadService } from 'src/app/services/observable/reload.service';

@Component({
  selector: 'app-register-assignment',
  templateUrl: './register-assignment.component.html',
  styleUrls: ['./register-assignment.component.scss']
})
export class RegisterAssignmentComponent implements OnInit {


  form!: FormGroup
  isLoading = false;
  pointOfDrops: any

  constructor(
    private fb: FormBuilder,
    private modalRef: NzModalRef,
    private societyService: societyService,
    private notification: NotificationService,
    private reload: ReloadService,
    private adminConsumer: AdminConsumerService
  ) { }

  ngOnInit(): void {
    this.form = this.fb.group({
      title: [``, Validators.required],
      description: [``, Validators.required],
      numberOfAdherent: [``, Validators.required],
      duration: [``, Validators.required],
      pointOfDropId: [``, Validators.required],
      reward: [``, Validators.required]
    })

    this.adminConsumer.getAllPointOfDrop().subscribe({
      next: (response: any) => {
        if (response.status == 200) {
          this.pointOfDrops = response.data;
        }
      },
      error: (err)=>{
        console.log(err);
      }
    })
  }

  createAssignment() {
    console.log(this.form.value);
    if (this.form.valid) {
      this.societyService.registerAssignment(this.form.value).subscribe({
        next: (response: any) => {
          if (response.status == 200) {
            this.notification.createNotification('success', 'Succès', 'Mission enregistrer avec succès');
            setTimeout(() => { this.close() }, 1000);
            this.reload.emit(true);
          } else {
            this.notification.createNotification('error', 'ERRORRR', 'ERRRORRRR')
          }
        }
      })
    } else {
      this.notification.createNotification('warning', 'Formulaire invalide', 'veuillez vérifier vos champs svp');
    }
  }
  close() {
    this.modalRef.destroy();
  }


}
