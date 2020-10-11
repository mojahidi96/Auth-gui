import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CustomValidators } from 'src/app/custom-validators';
import { LoggerService } from 'src/app/services/logger.service';
import { UsersService } from 'src/app/services/users.service';
import { UtilService } from 'src/app/services/util';

@Component({
  selector: 'sncr-change-password',
  templateUrl: './change-password.component.html',
  styleUrls: ['./change-password.component.scss']
})
export class ChangePasswordComponent implements OnInit {

  changePasswordForm: FormGroup;
  logger = new LoggerService('ChangePasswordComponent');
  verificationApiResponse: any;
  updatePassApiRespose: any;

  constructor(private fb: FormBuilder, private userService: UsersService) {
    const emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    this.changePasswordForm = this.fb.group({
      email: ['', [Validators.required, Validators.pattern(emailRegex)]],
      verificationCode: [''],
      password: [''],
      confPassword: [''],
    },
      { validator: CustomValidators.passwordMatchValidator('password', 'confPassword') })
  }

  get changePassControls() { return this.changePasswordForm.controls }

  ngOnInit(): void {
  }
  getAccessCode() {
    this.logger.info('Entered to getAccessCode method', this.changePasswordForm.value);
    UtilService.markFormAsDirty(this.changePasswordForm);
    if (this.changePasswordForm.valid) {
      let { email } = this.changePasswordForm.value;
      this.userService.sendAccessCode({ email }).subscribe(response => {
        this.logger.info("sendAccessCode api response", response);
        this.verificationApiResponse = response;
      }, error => {
        this.logger.info("getAccessCode api error response", error);
        this.verificationApiResponse = error.error;
      })
    }
  }

  onSubmit() {
    this.logger.info('Entered to onsubmit method', this.changePasswordForm.value);
    UtilService.markFormAsDirty(this.changePasswordForm);
    if (this.changePasswordForm.valid) {
      this.updatePassApiRespose = null;
      this.updatePassApiRespose = null;
      this.userService.updatePassword(this.changePasswordForm.value).subscribe(response => {
        this.logger.info("updatePassword api success response", response);
        this.updatePassApiRespose = response;
      }, error => {
        this.logger.info("updatePassword api error response", error);
        this.updatePassApiRespose = error.error;
      })
    }
  }
}
