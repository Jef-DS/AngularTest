import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StockItem1Component } from './stock-item1.component';

describe('StockItem1Component', () => {
  let component: StockItem1Component;
  let fixture: ComponentFixture<StockItem1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StockItem1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StockItem1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
