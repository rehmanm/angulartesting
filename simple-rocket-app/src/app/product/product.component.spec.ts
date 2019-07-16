import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductComponent } from './product.component';

import { Product } from '../product';

describe('ProductComponent', () => {
  let component: ProductComponent;
  let fixture: ComponentFixture<ProductComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductComponent ],
      imports: []
    })
    .compileComponents();
    
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductComponent);
    component = fixture.componentInstance;
    component.product = {
      id: 10,
      companyName: 'test',
      year: 50,
      rate: 30
  };
    fixture.detectChanges();
  });

  it('should create', () => {
    
  fixture.detectChanges();

    expect(component).toBeTruthy();
  });
});
