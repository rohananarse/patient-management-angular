import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PatientService {

  
  private addedPatient=[];
  private patientUpdated = new Subject();
  updatedPatient;

  constructor() { }

  getAllpatientList(){
    return [...this.addedPatient]
  }

  getPatientupdateListener() {
     return this.patientUpdated.asObservable();
  }

  addPatient(patientData){
    // this.postStatus = JSON.parse(localStorage.getItem('postcontent')) || [];
    this.addedPatient.push(patientData)
    console.log(patientData)
    this.patientUpdated.next([...this.addedPatient]);

    // localStorage.setItem('postcontent', JSON.stringify(this.postStatus))
  }

  updatePatient(selectedItem){
     console.log(selectedItem)
    this.updatedPatient = selectedItem; 
  }

}
