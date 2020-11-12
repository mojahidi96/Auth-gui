import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CustomValidators } from 'src/app/custom-validators';
import { UsersService } from 'src/app/services/users.service';
import { UtilService } from 'src/app/services/util';

@Component({
  selector: 'sncr-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  registerForm: FormGroup;
  registerApiResponse;
  isShowAlert = false;

  constructor(private fb: FormBuilder, private userService: UsersService) { }

  ngOnInit(): void {
    const emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    this.registerForm = this.fb.group({
      firstName: ['', Validators.compose([Validators.required, Validators.maxLength(25), Validators.pattern('^[a-zA-Z ]*$')])],
      lastName: ['', Validators.compose([Validators.required, Validators.maxLength(25), Validators.pattern('^[a-zA-Z ]*$')])],
      username: ['', Validators.required],
      email: ['', [Validators.required, Validators.pattern(emailRegex)]],
      password: [null, Validators.compose([
        Validators.required,
        Validators.minLength(8),
        CustomValidators.patternValidator(/\d/, { hasNumber: true }),
        CustomValidators.patternValidator(/[A-Z]/, { hasCapitalCase: true }),
        CustomValidators.patternValidator(/[a-z]/, { hasSmallCase: true }),
        CustomValidators.patternValidator(/[#?!@$%^&*-]/, { hasSpecialChar: true })
      ])],
      cnfPassword: ['', Validators.required],
      address: this.fb.group({
        street: ['', Validators.required],//this.fb.group({ galiNo: ['', Validators.required], houseNo: ['', Validators.required] }),
        city: ['', Validators.required],
        state: ['', Validators.required],
        zipcode: ['', [Validators.required, Validators.min(10000), Validators.max(999999)]]
      })
    }, {
      validator: CustomValidators.passwordMatchValidator('password', 'cnfPassword')
    })

  }

  get formControls() { return this.registerForm.controls }
  get addressControls() { return (this.registerForm.get('address') as FormArray).controls }

  onSubmit() {
    UtilService.markFormAsDirty(this.registerForm);
    if (this.registerForm.valid) {
      this.isShowAlert = true;
      this.userService.registerUser(this.registerForm.value).subscribe(apiResponse => {
        this.registerApiResponse = apiResponse;
      }, error => {
        this.registerApiResponse = error.error;
      })
    }
  }


}
