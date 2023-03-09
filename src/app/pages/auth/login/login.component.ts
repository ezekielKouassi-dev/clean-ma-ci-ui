import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Route, Router } from '@angular/router';
import { HttpService } from 'src/app/services/auth/auth.service';
import { NotificationService } from 'src/app/services/functions/notifications.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginForm!: FormGroup;
  isLoading = false;

  constructor(
    private fb: FormBuilder,
    private httpService: HttpService,
    private route: Router,
    private notification: NotificationService) { }


  ngOnInit(): void {
    this.loginForm = this.fb.group({
      identifier: [``, Validators.required],
      password: [``, Validators.required]
    });
  }

  signIn() {
    if (this.formIsValid()) {
      this.loadTwo();
      this.sender();
    }else {
      // this.notification.createNotification('warning', 'Attention', 'Vous devez remplir tous les champs');
    }
  }

  loadTwo(): void {
    this.isLoading = true;
    setTimeout(() => {
      this.isLoading = false;
    }, 3000);
  }

  formIsValid() {
    return this.loginForm.valid;
  }

  sender() {
    this.httpService.login(this.loginForm.value).subscribe({
      next: (response: any) => {
        console.log(response);
        if (response.status == 200) {
          this.notification.createNotification('success', 'Authentification réussite', 'Vos identifiants sont correcte');
          setTimeout(() => { this.route.navigate(['/userPlateform']) }, 3000)
        } else {
          this.notification.createNotification('error', 'échec de connexion', 'identifiant incorrecte');
        }
      },
      error: (err: any) => {
        this.notification.createNotification('error', 'échec de connexion', 'Une erreur est survenue');
      }
    });
    console.log(this.loginForm.value);
  }

}
