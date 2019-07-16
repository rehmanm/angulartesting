import { async, ComponentFixture, TestBed, tick } from '@angular/core/testing';
import {  ReactiveFormsModule, FormsModule  } from '@angular/forms';

import { BrowserModule, By } from '@angular/platform-browser';

import { RocketInfoFormComponent } from './rocket-info-form.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';

import { RocketInfoService } from '../rocket-info.service';
import { MockRocketInfoService } from '../mock-rocket-info-service';
import { RocketInfo } from '../rocket-info';


describe('RocketInfoFormComponent', () => {
  let component: RocketInfoFormComponent;
  let fixture: ComponentFixture<RocketInfoFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RocketInfoFormComponent ],
      imports : [ ReactiveFormsModule, HttpClientTestingModule, FormsModule, BrowserModule], 
      providers: [{ provide: RocketInfoService, useClass: MockRocketInfoService}]  
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

  it('form should be invalid', async(
    () => {
      component.rocketInfoForm.controls['firstName'].setValue('');
      component.rocketInfoForm.controls['lastName'].setValue('');
      component.rocketInfoForm.controls['creditScore'].setValue('');
      component.rocketInfoForm.controls['annualIncome'].setValue(''); 
      expect(component.rocketInfoForm.valid).toBeFalsy();     

    }
  ));
  it('form should be valid', async(
    () => {
      component.rocketInfoForm.controls['firstName'].setValue('First Name');
      component.rocketInfoForm.controls['lastName'].setValue('Last Name');
      component.rocketInfoForm.controls['creditScore'].setValue('99');
      component.rocketInfoForm.controls['annualIncome'].setValue('100'); 
      expect(component.rocketInfoForm.valid).toBeTruthy();     

    }
  ));
  it('should set submitted to true', async(
    () => {
      component.OnSubmit()
      expect(component.submitted).toBeTruthy();
    }
  ));
  it('Data should be added', async(
    () => {
      component.rocketInfoForm.controls['firstName'].setValue('First Name');
      component.rocketInfoForm.controls['lastName'].setValue('Last Name');
      component.rocketInfoForm.controls['creditScore'].setValue('99');
      component.rocketInfoForm.controls['annualIncome'].setValue('100'); 
      component.OnSubmit();
      spyOn(component, 'OnSubmit');
      const el = fixture.debugElement.query(By.css('button')).nativeElement;
      el.click();
      fixture.detectChanges();
      expect(component.message).toBeTruthy('Data Inserted Successfull');
      expect(component.rocketInfoForm.controls['firstName'].value).toBeNull()
    }
  ));

  it('Data should be added 2', async(
    () => {

      let rocketInfo: RocketInfo = {
        firstName: 'test',
        lastName: 'test',
        annualIncome: 5,
        creditScore: 7,
      } 

      let rocketInfoService:MockRocketInfoService = new MockRocketInfoService();
      rocketInfoService.add(rocketInfo).subscribe (
        newRocketInfo => rocketInfo = newRocketInfo
      );

      expect(rocketInfo.firstName).toBeTruthy('added');

    }
  ));
});

