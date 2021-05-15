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
import { LoginFooterComponent } from './login-footer/login-footer.component';
import { ForgotPasswordLinkComponent } from './forgot-password-link/forgot-password-link.component';
import { CancelButtonComponent } from './cancel-button/cancel-button.component';
import { RegisterAccountButtonComponent } from './register-account-button/register-account-button.component';
import { HeaderLogoComponent } from './header-logo/header-logo.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ModalModule } from './modal';

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
    LoginBodyComponent,
    LoginFooterComponent,
    ForgotPasswordLinkComponent,
    CancelButtonComponent,
    RegisterAccountButtonComponent,
    HeaderLogoComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ModalModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
