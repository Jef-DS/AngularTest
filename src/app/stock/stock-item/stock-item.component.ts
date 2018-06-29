import { Component, OnInit } from '@angular/core';
import { Stock } from '../../model/stock';

@Component({
  selector: 'app-stock-item',
  templateUrl: './stock-item.component.html',
  styleUrls: ['./stock-item.component.css']
})
export class StockItemComponent implements OnInit {
  public stocks: Array<Stock>;
  public stockClasses: object;
  constructor() { }

  ngOnInit() {
    this.stocks =[
       new Stock('CO. Br. Ha.', 'COBH', 4140, 4141),
       new Stock('AB Inbev', 'ABI', 82.28, 82.10),
       new Stock('Heineken', 'HENI', 88.25, 90.56)
    ]
    /*this.stockClasses = {
       'pricehigherorequal': this.stock.isPositiveChange(),
       'pricelower':  ! this.stock.isPositiveChange()
     };*/
  }
  toggleFavourite(event: MouseEvent, index: number) {
    this.stocks[index].favourite = ! this.stocks[index].favourite;
    console.log('Toggling the state', event);
  }

}
