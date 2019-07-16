import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import {  ReactiveFormsModule, FormsModule  } from '@angular/forms';

import { RocketInfoFormComponent } from './rocket-info-form.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('RocketInfoFormComponent', () => {
  let component: RocketInfoFormComponent;
  let fixture: ComponentFixture<RocketInfoFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RocketInfoFormComponent ],
      imports : [ ReactiveFormsModule, HttpClientTestingModule, FormsModule], 
      providers: [  ]  
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RocketInfoFormComponent);
    component = fixture.componentInstance;     
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
