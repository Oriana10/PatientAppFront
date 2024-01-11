import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiResponse, IPatient } from '../pages/shared/models/Patient';
import { environment } from '../environments/environment';

@Injectable({
  providedIn: 'root',
})

export class PatientService {
  // apiurl = 'http://localhost:4000/patient';
  // private apiurl = 'http://localhost:5000/api/pacientes';
  private apiurl = environment["url_server"];

  constructor(private http: HttpClient) {}

  getAllPatients(): Observable<ApiResponse<IPatient[]>> {
    return this.http.get<ApiResponse<IPatient[]>>(`${this.apiurl}`);
  }

  getPatient(id: string): Observable<ApiResponse<IPatient>> {
    return this.http.get<ApiResponse<IPatient>>(`${this.apiurl}/${id}`);
  }

  createPatient(patient: IPatient): Observable<any> {
    return this.http.post(`${this.apiurl}`, patient);
  }

  updatePatient(id: string, patient: IPatient): Observable<any> {
    return this.http.put(`${this.apiurl}/${id}`, patient);
  }

  deletePatient(id: string): Observable<ApiResponse<any>> {
    return this.http.delete<ApiResponse<any>>(`${this.apiurl}/${id}`);
  }
}