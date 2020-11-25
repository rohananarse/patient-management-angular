import { Component, OnInit , ViewChild, AfterViewInit} from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { PatientService } from 'app/services/patient.service';
import { PatientListComponent } from '../patient-list/patient-list.component';

import { UUID } from 'angular2-uuid';

@Component({
  selector: 'app-patient-details',
  templateUrl: './patient-details.component.html',
  styleUrls: ['./patient-details.component.css']
})
export class PatientDetailsComponent implements OnInit{

  patientData;
  submitted=false;
  addPatient:FormGroup;
  message:string;
  editmode = false;
  
  constructor(private formBuilder: FormBuilder, public patientService : PatientService) { }

  ngOnInit(): void {
    
   // this.editmode= this.uuid !==null;
    

    this.getFormUpdateData();

    this.addPatient = this.formBuilder.group({
      id: [''],
      userName : ['', Validators.required],
      lastName : ['', Validators.required],
      phone : ['', Validators.required],
      email : ['', Validators.required],
      address1 : ['', Validators.required],
      address2 : ['', Validators.required],
      city : ['', Validators.required],
      zip : ['', Validators.required],
      pin : ['', Validators.required],
    })
  }
  get f(){
    return this.addPatient.controls;
  }

  getFormUpdateData(){
 
    this.patientService.events$.forEach(event => {
      console.log(event)
      this.addPatient.controls["id"].setValue(event.id);
      this.addPatient.controls["userName"].setValue(event.userName);
      this.addPatient.controls["lastName"].setValue(event.lastName);
      this.addPatient.controls["phone"].setValue(this.patientData.phone);
      this.addPatient.controls["email"].setValue(this.patientData.email);
      this.addPatient.controls["address1"].setValue(this.patientData.address1);
      this.addPatient.controls["address2"].setValue(this.patientData.address2);
      this.addPatient.controls["city"].setValue(this.patientData.address2);
      this.addPatient.controls["zip"].setValue(this.patientData.address2);
      this.addPatient.controls["pin"].setValue(this.patientData.pin);
    });

  }

  onSubmit(){
    this.submitted = true;
    if(this.addPatient.valid){
      if(this.addPatient.value.id){

      }
      this.submitted = true;
         this.patientData = this.addPatient.value
         this.patientService.addPatient(this.patientData);    
         this.addPatient.reset()
       }
    }

   
  }
