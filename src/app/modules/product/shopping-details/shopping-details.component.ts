import { Component, OnInit } from '@angular/core';
import countries from 'src/assets/country-by-name.json';
import cities from 'src/assets/cities by country.json';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-shopping-details',
  templateUrl: './shopping-details.component.html'
})
export class ShoppingDetailsComponent implements OnInit {
  countries = countries;
  cities = cities;
  selectedCountry: any;
  shoppingDetailsForm: any;
  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.shoppingDetailsForm = this.fb.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      address: ['', Validators.required],
      street: ['', Validators.required],
      country: ['', Validators.required],
      city: ['', Validators.required],
      zip: ['', Validators.required],
      phoneNumber: ['', Validators.compose([Validators.required, Validators.maxLength(10)])],
      shipping: ['freeshipping', Validators.required]
    })
  }

  get shoppingDetailsControl() { return this.shoppingDetailsForm.controls }

}
