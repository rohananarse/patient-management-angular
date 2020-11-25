import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { UUID } from 'angular2-uuid';

@Injectable({
  providedIn: 'root'
})
export class PatientService {

  
  private addedPatient=[];
  private patientUpdated = new Subject();
  updatedPatient;
  private _subject = new Subject<any>();

  constructor() { }

  getAllpatientList(){
    return [...this.addedPatient]
  }

  getPatientupdateListener() {
     return this.patientUpdated.asObservable();
  }

  addPatient(patientData){
    patientData.id = UUID.UUID();
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

  updatePatientList(patientData,id){
    this.addedPatient.push(id,patientData.value)
  }

  newEvent(event) {
    this._subject.next(event);
  }

  get events$ () {
    return this._subject.asObservable();
  }
}
