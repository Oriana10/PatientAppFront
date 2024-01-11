import { Component, OnInit } from '@angular/core';
import { ModelComponent } from '../shared/ui/model/model.component';
import { ToastrService } from 'ngx-toastr';
import { PatientService } from '../../services/patient.service';
import { IPatient } from '../shared/models/Patient';
import { PatientFormComponent } from '../patient-form/patient-form.component';

@Component({
  selector: 'app-patient',
  standalone: true,
  imports: [ModelComponent, PatientFormComponent],
  templateUrl: './patient.component.html',
  styleUrl: './patient.component.scss',
})

export class PatientComponent implements OnInit {
  isModelOpen = false;
  patients: IPatient[] = [];
  patient!: IPatient;

  constructor(
    private patientService: PatientService,
    private toastr: ToastrService
  ) {}

  ngOnInit(): void {
    this.getAllPatients();
  }

  getAllPatients() {
    this.patientService.getAllPatients().subscribe(element => {
      console.log(element)
      this.patients = element
    }) 
  }

  loadPatient(patient: IPatient) {
    this.patient = patient;
    this.openModel();
  }

  deletePatient(id: string) {
    this.patientService.deletePatient(id).subscribe({
      next: (response) => {
        this.toastr.success(response.message);
        this.getAllPatients();
      },
    });
  }

  openModel() {
    this.isModelOpen = true;
  }

  addPatient(value: any){
    console.log(value)
    this.patients.push(value)
  }

  closeModel() {
    this.isModelOpen = false;
    this.getAllPatients();
  }
}
