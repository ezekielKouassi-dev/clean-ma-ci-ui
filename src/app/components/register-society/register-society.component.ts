import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NzModalRef } from 'ng-zorro-antd/modal';
import { AdminConsumerService } from 'src/app/services/api-consumer/api-admin-consumer.service';
import { NotificationService } from 'src/app/services/functions/notifications.service';

@Component({
  selector: 'app-register-society',
  templateUrl: './register-society.component.html',
  styleUrls: ['./register-society.component.scss']
})
export class RegisterSocietyComponent implements OnInit {
  @Output() formSubmitted = new EventEmitter();
  form!: FormGroup;
  isLoading = false;

  constructor(
    private fb: FormBuilder,
    private notification: NotificationService,
    private modalRef: NzModalRef,
    private adminConsumer: AdminConsumerService
  ) { }

  ngOnInit(): void {
    this.form = this.fb.group({
      name: [``, Validators.required],
      email: [``, Validators.required],
      phone: [``, Validators.required],
      username: [``, Validators.required],
      password: [``, Validators.required]
    });
  }

  createProcessingCompany() {
    this.loadTwo();
    if (this.form.valid) {
      console.log(this.form.value);
      this.adminConsumer.registerProcessing(this.form.value).subscribe({
        next: (response: any)=> {
          console.log(response);
          if(response.status) {
            this.notification.createNotification('success', 'Enregistrement réussie', 'Société de traitement sauvegarder');
            setTimeout(()=>{this.close()}, 3000)
          }else {
            this.notification.createNotification('error', 'ERRROR', response.message);
          }
        },
        error: (err)=> {
          console.log(err);
        }
      })
    } else {
      this.notification.createNotification('warning', 'Formnulaire invalid', 'Veuillez saisir tous les champs.');
    }
  }

  close() {
    this.modalRef.destroy();
  }

  loadTwo(): void {
    this.isLoading = true;
    setTimeout(() => {
      this.isLoading = false;
    }, 3000);
  }
}
