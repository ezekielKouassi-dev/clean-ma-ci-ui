import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NzModalRef } from 'ng-zorro-antd/modal';
import { AdminConsumerService } from 'src/app/services/api-consumer/api-admin-consumer.service';
import { NotificationService } from 'src/app/services/functions/notifications.service';
import { ReloadService } from 'src/app/services/observable/reload.service';

@Component({
  selector: 'app-register-locality',
  templateUrl: './register-locality.component.html',
  styleUrls: ['./register-locality.component.scss']
})
export class RegisterLocalityComponent implements OnInit {
  isLoading = false;
  form!: FormGroup

  constructor(
    private fb: FormBuilder,
    private modalRef: NzModalRef,
    private adminConsumer: AdminConsumerService,
    private notification: NotificationService,
    private reload: ReloadService
  ) { }

  ngOnInit(): void {
    this.form = this.fb.group({
      name: [``, Validators.required]
    });
  }

  createLocality() {
    this.loadTwo();
    console.log(this.form.value);
    if (this.form.valid) {
      this.adminConsumer.registerLocality(this.form.value).subscribe({
        next: (response: any) => {
          console.log(response);
          if (response.status == 200) {
            this.notification.createNotification('success', 'Enregistrement réussi', 'Localité enregistré');
            setTimeout(() => { this.close() }, 1000);
            this.reload.emit(true);
          }
        }
      })
    } else {
      this.notification.createNotification('error', 'iLe formulaire est invalide', 'impossible de validé les données');
    }
  }

  close() {
    this.modalRef.destroy()
  }

  loadTwo(): void {
    this.isLoading = true;
    setTimeout(() => {
      this.isLoading = false;
    }, 3000);
  }

}
