---
layout: single
permalink: /form-component/o-form.extend/
title: "Extending a form"
excerpt: "Tips for extending a form component"
---

Form component extension must follow the next steps:

1. Adding *@OComponent* decorator to component.
2. Class extends *OFormComponent* and it must be specified as provider in the decorator.

From there, *OFormComponent* methods could be overwritten following use requirements.

This example shows how to extend a form for creating a classic registration form including a captcha and password verification befor submitting data.



```javascript
import { Injector, forwardRef } from '@angular/core';
import { Location } from '@angular/common';
import { Router, ActivatedRoute } from '@angular/router';
import { OComponent, OFormComponent, LoginService,
   OntimizeService, dataServiceFactory } from 'ontimize-web-ngx';

@OComponent({
  selector: 'sign-in-form',
  providers: [
    {
      provide: OntimizeService,
      useFactory: dataServiceFactory
    }, {
      provide: OFormComponent,
      useExisting: forwardRef(() => signInFormComponent)
    }
  ]
})
export class SignInFormComponent extends OFormComponent {

  protected recaptchaResponseToken: string;

  constructor(
    _router: Router, _location: Location,
    _actRoute: ActivatedRoute, _loginService: LoginService,
    injector: Injector) {

    super(_router, _location, _actRoute, _loginService, injector);
    this.recaptchaResponseToken = undefined;
  }

  protected postCorrectInsert(result: any) {
    if (result && result.confirmation_key) {
      //TODO: send mail with result.confirmation_key
      this.dialogService.alert('CONFIRM_PENDING', 'CONFIRM_PENDING_MESSAGE')
        .then(
          res => {
            this._router.navigate(['home']);
          }
        );
    } else {
      this.dialogService.alert('ERROR', 'ERROR_SIGN_IN');
    }
  }

  protected postIncorrectInsert(result: any) {
    let msg = 'ERROR_SIGN_IN';
    if (result && 'json' in result) {
      let res = result.json();
      if (res.message) {
        msg = res.message;
      }
    }
    this.dialogService.alert('ERROR', msg);
  }

  protected getCaptcha(response: any) {
    this.recaptchaResponseToken = response;
  }

  public send() {
    if (this.formGroup.controls['password'].value !==
      this.formGroup.controls['password2'].value) {

      this.dialogService.alert('ERROR', 'ERROR_PASSWORDS_NOT_MATCH');
    } else if (typeof(this.recaptchaResponseToken) === 'undefined') {
      this.dialogService.alert('ERROR', 'ERROR_CAPTCHA');
    } else {
      this._insertAction();
    }
  }

}

```
<br/>
Using example:

```html
<sign-in-form layout="column" show-header="no" label-header="REGISTRY"
  header-actions="I" service="pharmacy" entity="registerPharmacy"
  columns="username;password;license;name_comercial;locality;province"
  keys="username" #registryForm>

  <div layout="column" class="registry-fieldset">

    <o-text-input attr="license" required="yes" flex
      [data]="registryForm.getDataValue('license')" >
    </o-text-input>

    <o-text-input attr="name_comercial" required="yes" flex
      [data]="registryForm.getDataValue('name_comercial')">
    </o-text-input>

    <o-text-input attr="locality" required="yes"
      flex [data]="registryForm.getDataValue('locality')">
    </o-text-input>

    <o-text-input attr="province" required="yes" flex
      [data]="registryForm.getDataValue('province')">
    </o-text-input>

    <o-email-input attr="username" required="yes" flex
      [data]="registryForm.getDataValue('username')">
    </o-email-input>

    <o-password-input attr="password" required="yes"
      min-length="6" max-length="30" flex
      [data]="registryForm.getDataValue('password')">
    </o-password-input>

    <o-password-input attr="password2" required="yes"
      min-length="6" max-length="30" flex
      [data]="registryForm.getDataValue('password2')">
    </o-password-input>

    <re-captcha siteKey="{{ GOOGLE_RECAPTCHA_KEY }}"
      (captchaResponse)="registryForm.getCaptcha($event)">
    </re-captcha>

    <div layout="column" layout-align="center center">
      <o-button label="SEND" (click)="registryForm.send()">
    </o-button>

    </div>

  </div>

</sign-in-form>

```
