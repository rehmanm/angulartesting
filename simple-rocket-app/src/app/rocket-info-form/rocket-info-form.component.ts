import { Component, OnInit } from '@angular/core';
import { RocketInfo } from '../rocket-info';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

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
        firstName: ['', [Validators.required, Validators.maxLength]],
        lastName: ['', [Validators.required, Validators.maxLength]],
        creditScore: ['', [Validators.required, Validators.max(999)]],
        annualIncome: ['', [Validators.required, Validators.max(50000)]],
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

    this.rocketInfo.firstName = this.f.firstName.value;
    this.rocketInfo.lastName = this.f.lastName.value;
    this.rocketInfo.creditScore = this.f.creditScore.value;
    this.rocketInfo.annualIncome = this.f.annualIncome.value;
    
    this.rocketInfoService.add(this.rocketInfo).subscribe(
      r => {
        this.rocketInfoForm.reset();
        this.submitted=false;
        this.message = 'Data Inserted Successfully';

      }
    )
  }

}
