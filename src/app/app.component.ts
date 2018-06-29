import { Component } from '@angular/core';
import { Stock } from './model/stock';

@Component({
  selector: '#app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = '<strong>Stock market</strong>';
  name = 'Joske Vermeulen';
  stockObj: Stock;
  constructor() {
    this.stockObj = new Stock('Co.Br.Ha', 'COBH', 4120, 4120);
  }
  onSwitchFavourite(stock: Stock) {
    stock.favourite = ! stock.favourite;
  }
}
