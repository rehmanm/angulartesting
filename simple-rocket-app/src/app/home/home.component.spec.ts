import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import {  ReactiveFormsModule, FormsModule  } from '@angular/forms';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { HomeComponent } from './home.component';
import { RocketInfoFormComponent } from '../rocket-info-form/rocket-info-form.component';
import { ProductListComponent } from '../product-list/product-list.component';
import { ProductComponent } from '../product/product.component';

// </app-rocket-info-form>

describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomeComponent,RocketInfoFormComponent,ProductListComponent, ProductComponent ],
      imports: [ReactiveFormsModule, FormsModule, HttpClientTestingModule ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
