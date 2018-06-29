import { Component, OnInit } from '@angular/core';
import { Stock } from '../model/stock';

@Component({
  selector: 'app-create-stock',
  templateUrl: './create-stock.component.html',
  styleUrls: ['./create-stock.component.css']
})
export class CreateStockComponent implements OnInit {
  public stock: Stock;
  public confirmed: boolean;
  constructor() {
    this.stock = new Stock('Test', '', 0, 0, 'EUNEXT');
   }

  ngOnInit() {
  }
  setStockPrice(price: number) {
    this.stock.price = this.stock.previousPrice = price;
  }
  createStock(){
    console.log('Creating stock: ', this.stock);
  }

}
