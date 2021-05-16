import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UsernameFieldComponent } from './login-page/username-field/username-field.component';
import { PasswordFieldComponent } from './login-page/password-field/password-field.component';
import { RememberCheckBoxComponent } from './login-page/remember-check-box/remember-check-box.component';
import { SignOnButtonComponent } from './login-page/sign-on-button/sign-on-button.component';
import { RegisterLinkComponent } from './login-page/register-link/register-link.component';
import { EmailFieldComponent } from './login-page/email-field/email-field.component';
import { NewUserDialogComponent } from './login-page/new-user-dialog/new-user-dialog.component';
import { LoginBodyComponent } from './login-page/login-body/login-body.component';
import { LoginFooterComponent } from './login-page/login-footer/login-footer.component';
import { ForgotPasswordLinkComponent } from './login-page/forgot-password-link/forgot-password-link.component';
import { CancelButtonComponent } from './login-page/cancel-button/cancel-button.component';
import { RegisterAccountButtonComponent } from './login-page/register-account-button/register-account-button.component';
import { HeaderLogoComponent } from './login-page/header-logo/header-logo.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ModalModule } from './modal';
import { LoginPageComponent } from './login-page/login-page.component';
import { ApplicationViewComponent } from './application-view/application-view.component';
import { HeaderFirstComponent } from './application-view/header-first/header-first.component';
import { GaggleLogoComponent } from './application-view/header-first/gaggle-logo/gaggle-logo.component';
import { SaveIndicatorComponent } from './application-view/header-first/save-indicator/save-indicator.component';
import { HeaderSecondComponent } from './application-view/header-second/header-second.component';
import { LeftButtonsComponent } from './application-view/header-second/left-buttons/left-buttons.component';
import { FilterExportComponent } from './application-view/header-second/filter-export/filter-export.component';
import { HeaderThirdComponent } from './application-view/header-third/header-third.component';
import { DateTypeStatusComponent } from './application-view/header-third/date-type-status/date-type-status.component';

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
    LoginPageComponent,
    ApplicationViewComponent,
    HeaderFirstComponent,
    GaggleLogoComponent,
    SaveIndicatorComponent,
    HeaderSecondComponent,
    LeftButtonsComponent,
    FilterExportComponent,
    HeaderThirdComponent,
    DateTypeStatusComponent,
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
