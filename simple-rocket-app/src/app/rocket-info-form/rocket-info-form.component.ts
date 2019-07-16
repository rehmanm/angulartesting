import { Component, OnInit } from '@angular/core';
import { RocketInfo } from '../rocket-info';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';

import { RocketInfoService } from '../rocket-info.service';

@Component({
  selector: 'app-rocket-info-form',
  templateUrl: './rocket-info-form.component.html',
  styleUrls: ['./rocket-info-form.component.css']
})
export class RocketInfoFormComponent implements OnInit {

  rocketInfoForm: FormGroup;
  rocketInfo: RocketInfo;
  submitted: boolean;
  message:string;
  constructor(private formBuilder: FormBuilder, private rocketInfoService: RocketInfoService) { }

  ngOnInit() {
    this.rocketInfo = new RocketInfo();
    this.submitted = false;
    this.message = "";
    this.rocketInfoForm = this.formBuilder.group(
      {
        'firstName': new FormControl(this.rocketInfo.firstName, 
          [Validators.required, Validators.maxLength(50)]
        ),
        'lastName': new FormControl(this.rocketInfo.firstName, 
          [Validators.required, Validators.maxLength(50)]
        ),
        'creditScore': new FormControl(this.rocketInfo.firstName, 
          [Validators.required, Validators.max(999)]
        ),
        'annualIncome': new FormControl(this.rocketInfo.firstName, 
          [Validators.required, Validators.max(50000)]
        ),  
        }
    )
  }

  get f() { return this.rocketInfoForm.controls; }

  OnSubmit() : void{
    this.submitted = true;
    if(!this.rocketInfoForm.valid){
      console.log(this.f.creditScore.errors);
      return;
    }
    console.log(this.rocketInfo);
    this.rocketInfo.firstName = this.f.firstName.value;
    this.rocketInfo.lastName = this.f.lastName.value;
    this.rocketInfo.creditScore = this.f.creditScore.value;
    this.rocketInfo.annualIncome = this.f.annualIncome.value;
    
    this.rocketInfoService.add(this.rocketInfo).subscribe(
      r => {
        if(r) {
          this.rocketInfoForm.reset();
          this.submitted=false;
          this.message = 'Data Inserted Successfully';
        } else {
          this.message = 'Unable to Insert Data';
        }

      }
    )
  }

}
