import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './pages/auth/login/login.component';
import { RegisterComponent } from './pages/auth/register/register.component';
import { HomeComponent } from './pages/home/home.component';
import { NavBarComponent } from './components/shared/nav-bar/nav-bar.component';
import { NZ_I18N } from 'ng-zorro-antd/i18n';
import { fr_FR } from 'ng-zorro-antd/i18n';
import { registerLocaleData } from '@angular/common';
import fr from '@angular/common/locales/fr';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { IconsProviderModule } from './icons-provider.module';
import { UserModule } from './modules/user.module';
import { NzNotificationService } from 'ng-zorro-antd/notification';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzSpinModule } from 'ng-zorro-antd/spin';
import { UserConsumerService } from './services/api-consumer/api-user-consumer.service';



registerLocaleData(fr);

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    HomeComponent,
    NavBarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    IconsProviderModule,
    NzButtonModule,
    NzSpinModule,
    UserModule
  ],
  providers: [
    { provide: NZ_I18N, useValue: fr_FR },
    NzNotificationService,
    UserConsumerService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
