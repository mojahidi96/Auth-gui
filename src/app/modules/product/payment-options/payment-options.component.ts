import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-payment-options',
  templateUrl: './payment-options.component.html'
})
export class PaymentOptionsComponent implements OnInit {

  paymentForm: FormGroup;
  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.paymentForm = this.fb.group({
      paymentmethod: ['card', Validators.required],
      // upi: ['upi', Validators.required],
      // netbanking: ['netbanking', Validators.required],
      // cod: ['cod', Validators.required]
    })
  }

  get paymentControl() { return this.paymentForm.controls }

}
