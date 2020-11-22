import { Component, OnInit , ViewChild, AfterViewInit} from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { PatientService } from 'app/services/patient.service';
import { PatientListComponent } from '../patient-list/patient-list.component';


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
x;
  constructor(private formBuilder: FormBuilder, public patientService : PatientService) { }

  ngOnInit(): void {

    this.getFormUpdateData();

    this.addPatient = this.formBuilder.group({
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

  editForm(){
    this.addPatient.controls["firstName"].setValue(this.patientData.firstName);
    this.addPatient.controls["lastName"].setValue(this.patientData.lastName)
  }


  getFormUpdateData(){
  //  this.x = this.patientService.updatePatient(this.addPatient) 
    console.log(this.x, 'jjjj')
  }



  onSubmit(){
    this.submitted = true;
    if(this.addPatient.valid){
      this.submitted = true;
       if(this.addPatient.valid){
         this.patientData = this.addPatient.value
         this.patientService.addPatient(this.patientData);
         this.addPatient.reset()
       }
     }
    }
  }
