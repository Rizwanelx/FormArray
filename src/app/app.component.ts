import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormArray ,} from '@angular/forms';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
title: 'Feature Module';

orderForm: FormGroup;
items: FormArray;

constructor(private formBuilder: FormBuilder) {}

ngOnInit() {
  this.orderForm = this.formBuilder.group({
    customerName: '',
    email: '',
    items: this.formBuilder.array([  ])
  });
}
createItem(): FormGroup {
  return this.formBuilder.group({
    name: '',
    description: '',
    price: ''
  });
}
addItem(): void {
  this.items = this.orderForm.get('items') as FormArray;
  this.items.push(this.createItem());
}
onSubmit(): void {
  console.log(this.orderForm.value);
}
}
