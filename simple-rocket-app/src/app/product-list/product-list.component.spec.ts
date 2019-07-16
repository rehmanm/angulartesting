import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductListComponent } from './product-list.component';

import { ProductComponent } from '../product/product.component';

import { HttpClientTestingModule } from '@angular/common/http/testing';

import { ProductService } from '../product.service';
import { MockProductService } from '../mock-product.service';

describe('ProductListComponent', () => {
  let component: ProductListComponent;
  let fixture: ComponentFixture<ProductListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductListComponent, ProductComponent ],
      imports: [ HttpClientTestingModule ],
      providers: [{ provide: ProductService, useClass: MockProductService}]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductListComponent);
    component = fixture.componentInstance;
    component.products = [];
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('product count should be 7', () => {
    fixture.detectChanges();
    expect(component.products.length).toEqual(7);
  });

  it('load products', () => {
    fixture.detectChanges();
    const el = fixture.nativeElement.querySelector('h2');
    expect(el.innerText).toContain('Mock');
  });
});
