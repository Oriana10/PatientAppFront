import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { ApiResponse, IPatient } from '../pages/shared/models/Patient';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root',
})

export class PatientService {
  private apiurl = environment["url_server"];

  constructor(private http: HttpClient) {}

  getAllPatients(): Observable<IPatient[]> {
    return this.http.get(this.apiurl + '/pacientes', { responseType: 'json' })
      .pipe(map(patients => patients as IPatient[]));
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