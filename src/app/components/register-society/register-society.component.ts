import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NzModalRef } from 'ng-zorro-antd/modal';
import { NotificationService } from 'src/app/services/functions/notifications.service';

@Component({
  selector: 'app-register-society',
  templateUrl: './register-society.component.html',
  styleUrls: ['./register-society.component.scss']
})
export class RegisterSocietyComponent implements OnInit {
  @Output() formSubmitted = new EventEmitter();
  form!: FormGroup;

  constructor(private fb: FormBuilder, private notification : NotificationService, private modalRef: NzModalRef) { }

  ngOnInit(): void {
    this.form = this.fb.group({
      processingCompanyName: [``, Validators.required],
      processingCompanyEmail: [``, Validators.required],
      processingCompanyPhone: [``, Validators.required],
      processingCompanyIdentifier: [``, Validators.required],
      processingCompanyPassword: [``, Validators.required]
    });
  }

  createProcessingCompany() {
    if(this.form.valid) {
      console.log(this.form.value);
    } else {
      this.notification.createNotification('warning', 'Formnulaire invalid', 'Veuillez saisir tous les champs.');
    }
  }

  close() {
    this.modalRef.destroy();
  }
}
