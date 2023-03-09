import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { HttpService } from 'src/app/services/auth/auth.service';
import { NotificationService } from 'src/app/services/functions/notifications.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent implements OnInit {
  registerForm!: FormGroup;

  // TODO : create facade for service

  constructor(
    private fb: FormBuilder, 
    private httpService: HttpService, 
    private notification : NotificationService,
    private route: Router) { }

  ngOnInit(): void {
    this.registerForm = this.fb.group({
      lastName: '' /*[``, Validators.required, Validators.nullValidator]*/,
      firstName: '' /*[``, Validators.required, Validators.nullValidator]*/,
      identifier: '' /*[``, Validators.required, Validators.nullValidator]*/,
      email: '' /*[``, Validators.required, Validators.email, Validators.nullValidator]*/,
      password: [``, Validators.required],
      confirmPassword: [``, Validators.required],
    });
  }

  onSubmit() {
    this.httpService.register(this.registerForm.value).subscribe({
      next: (response: any) => {
        if (response.status == 200) {
          this.notification.createNotification('success', 'Inscription réussie', 'Félicitation vôtre inscription est un success');
          setTimeout(()=>{this.route.navigate(['/login'])}, 3000)
        }else {
          this.notification.createNotification('error', 'Echec', 'Votre inscription à échoué');
        }
      },
      error: (err: any) => {
        this.notification.createNotification('error', 'Echec', 'Désolé une erreur est survenue');
      }
    });
    console.log(this.registerForm.value);
  }

  // matchingPasswords(passwordKey: string, confirmPasswordKey: string) {
  //   return (group: FormGroup) => {
  //     const password = group.controls[passwordKey];
  //     const confirmPassword = group.controls[confirmPasswordKey];

  //     if (password.value !== confirmPassword.value) {
  //       return confirmPassword.setErrors({ mismatchedPasswords: true });
  //     }
  //   };
  // }

}
