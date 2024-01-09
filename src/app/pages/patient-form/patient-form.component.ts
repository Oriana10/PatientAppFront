import { Component, EventEmitter, Input, OnChanges, Output } from '@angular/core';
import { IPatient } from '../shared/models/Patient';
import { FormGroup, FormBuilder, FormControl, Validators, ReactiveFormsModule} from '@angular/forms';
import { CommonModule, formatDate } from '@angular/common';
import { RouterModule } from '@angular/router';
import { PatientService } from '../../services/patient.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-patient-form',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, RouterModule],
  templateUrl: './patient-form.component.html',
  styleUrl: './patient-form.component.scss',
})

export class PatientFormComponent implements OnChanges {
  @Input() data: IPatient | null = null;
  @Output() onCloseModel = new EventEmitter();

  patientForm!: FormGroup;

  constructor(
    private fb: FormBuilder,
    private patientService: PatientService,
    private toastr: ToastrService
  ) {
    this.patientForm = this.fb.group({
      name: new FormControl('', [Validators.required]),
      lastname: new FormControl('', [Validators.required]),
      typeOfDocument: new FormControl('', [Validators.required]),
      documentNumber: new FormControl('', [Validators.required]),
      medicalHistoryNumber: new FormControl('', [Validators.required]),
      enabled: new FormControl('', [Validators.required])
      //email: new FormControl('', [Validators.required, Validators.email]),
    });
  }

  onClose() {
    this.onCloseModel.emit(false);
  }

  ngOnChanges(): void {
    if (this.data) {
      this.patientForm.patchValue({
        name: this.data.name,
        lastname: this.data.lastname,
        typeOfDocument: this.data.typeOfDocument,
        documentNumber: this.data.documentNumber,
        medicalHistoryNumber: this.data.medicalHistoryNumber,
        enabled: this.data.enabled,
        //dob: formatDate(this.data.dob, 'yyyy-MM-dd', 'en'),
      });
    }
  }

  onSubmit() {
    if (this.patientForm.valid) {
      if (this.data) {
        this.patientService
          .updatePatient(this.data._id as string, this.patientForm.value)
          .subscribe({
            next: (response: any) => {
              this.resetPatientForm();
              this.toastr.success(response.message);
            },
          });
      } else {
        this.patientService.createPatient(this.patientForm.value).subscribe({
          next: (response: any) => {
            this.resetPatientForm();
            this.toastr.success(response.message);
          },
        });
      }
    } else {
      this.patientForm.markAllAsTouched();
    }
  }

  resetPatientForm() {
    this.patientForm.reset();
    this.onClose();
  }
}
