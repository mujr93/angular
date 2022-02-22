import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-keypad',
  templateUrl: './keypad.component.html',
  styleUrls: ['./keypad.component.css']
})
export class KeypadComponent implements OnInit {
  price = 0;
  total = 0;
  list: string[] = [];

  constructor() { }

  ngOnInit(): void {
  }

  addToInput(digit: number) {
    this.price = parseInt(this.price.toString() + digit.toString());
  }

  removeFromInput() {
    if (this.price.toString().length !== 1) {
      this.price = parseInt(this.price.toString().substring(0, this.price.toString().length - 1));
    } else {
      this.price = 0;
    }
  }

  clearInput() {
    this.price = 0;
  }

  addToList() {
    if (this.price !== 0) {
      this.total = this.total + this.price;
      this.list.push(this.price.toString());
      this.clearInput();
    } else {
      alert('Price is zero!');
    }
  }

  clearList() {
    this.list = [];
    this.total = 0;
  }
}
