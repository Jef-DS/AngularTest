import { Component, OnInit, Input, Output,  EventEmitter } from '@angular/core';
import { Stock } from '../../model/stock';

@Component({
  selector: 'app-stock-item1',
  templateUrl: './stock-item1.component.html',
  styleUrls: ['./stock-item1.component.css']
})
export class StockItem1Component implements OnInit {
  @Input() public stock: Stock;
  @Output() public toggleFavourite: EventEmitter<Stock>;
  constructor() {
    this.toggleFavourite = new EventEmitter<Stock>();
   }

  ngOnInit() {
  }
  onToggleFavourite(event) {
    this.toggleFavourite.emit(this.stock);
  }

}
