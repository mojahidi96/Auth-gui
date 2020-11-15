import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import countries from 'src/assets/country-by-name.json';
import cities from 'src/assets/cities by country.json';
import { FormBuilder, Validators } from '@angular/forms';
import { UtilService } from 'src/app/services/util';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-shopping-details',
  templateUrl: './shopping-details.component.html',
})
export class ShoppingDetailsComponent implements OnInit {
  countries = countries;
  cities = cities;
  selectedCountry: any;
  shoppingDetailsForm: any;

  @Output() emitToNext: EventEmitter<boolean> = new EventEmitter()

  constructor(private fb: FormBuilder, private productService: ProductService) { }

  ngOnInit(): void {
    this.shoppingDetailsForm = this.fb.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      address: ['', Validators.required],
      street: ['', Validators.required],
      country: ['', Validators.required],
      city: ['', Validators.required],
      zip: ['', Validators.required],
      phoneNumber: ['', Validators.compose([Validators.required, Validators.minLength(10)])],
      shipping: ['freeshipping', Validators.required]
    })    
  }

  get shoppingDetailsControl() { return this.shoppingDetailsForm.controls }


  submitForm() {
    UtilService.markFormAsDirty(this.shoppingDetailsForm);
    if (this.shoppingDetailsForm.valid) {
      this.emitToNext.emit(true);
    }
  }

}
