import { Component, OnInit, OnDestroy } from "@angular/core";
import { PatientService } from 'app/services/patient.service';
import { Subscription } from 'rxjs';
import { Subject } from 'rxjs';

declare var $:any;


@Component({
  selector: 'app-patient-list',
  templateUrl: './patient-list.component.html',
  styleUrls: ['./patient-list.component.css']
})
export class PatientListComponent implements OnInit , OnDestroy{

  editPatientData;
  patientData :any = [];
  selectedPatientData={};
  PatientUpdated:Subscription;

  //private patientFormdata = new Subject();


  constructor(public patientService : PatientService) { }

  ngOnInit(){
    this.patientData = this.patientService.getAllpatientList();
    this.PatientUpdated = this.patientService.getPatientupdateListener()
    .subscribe(patientData => {
       this.patientData = patientData;
       console.log(this.patientData)
     });
  }


  ngOnDestroy() {
    this.PatientUpdated.unsubscribe();
  }

  onSelect(selectedItem: any) {
   // console.log("Selected item Id: ", selectedItem); // You get the Id of the selected item here
    this.selectedPatientData = selectedItem
    console.log(this.selectedPatientData)
}

  onEdit(selectedItem){
    this.patientService.newEvent(selectedItem)
  }


}
