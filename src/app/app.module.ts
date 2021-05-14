import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UsernameFieldComponent } from './username-field/username-field.component';
import { PasswordFieldComponent } from './password-field/password-field.component';
import { RememberCheckBoxComponent } from './remember-check-box/remember-check-box.component';
import { SignOnButtonComponent } from './sign-on-button/sign-on-button.component';
import { RegisterLinkComponent } from './register-link/register-link.component';
import { EmailFieldComponent } from './email-field/email-field.component';
import { NewUserDialogComponent } from './new-user-dialog/new-user-dialog.component';
import { LoginBodyComponent } from './login-body/login-body.component';

@NgModule({
  declarations: [
    AppComponent,
    UsernameFieldComponent,
    PasswordFieldComponent,
    RememberCheckBoxComponent,
    SignOnButtonComponent,
    RegisterLinkComponent,
    EmailFieldComponent,
    NewUserDialogComponent,
    LoginBodyComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
