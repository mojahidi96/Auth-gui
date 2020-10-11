import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoggerService } from 'src/app/services/logger.service';
import { UsersService } from 'src/app/services/users.service';
import { UtilService } from 'src/app/services/util';

let logger = new LoggerService('LoginComponent');
@Component({
  selector: 'sncr-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;
  loginResponse: any;
  constructor(private formBuilder: FormBuilder, private userService: UsersService, private route: Router) {
    this.loginForm = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    })
  }
  get loginControls() { return this.loginForm.controls; }

  ngOnInit(): void {
    logger.info("Initialized");

  }

  onSubmit() {
    logger.info("Entered onSubmint method", this.loginForm.value);
    UtilService.markFormAsDirty(this.loginForm);
    if (this.loginForm.valid) {
      this.userService.login(this.loginForm.value).subscribe(loginRes => {
        logger.info("Login API response", loginRes);
        if (loginRes.success) {
          loginRes.data.token ? localStorage.setItem('token', loginRes.data.token) : ''
          this.route.navigateByUrl('/list');
        } else {
          this.loginResponse = loginRes;
        }
      }, error => {
        logger.error("Error occured on api call", error);
        this.loginResponse = error.error;
      })
    }
  }
}
