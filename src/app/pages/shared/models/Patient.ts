export interface ApiResponse<T> {
  message?: string;
  data: T;
}

export interface IPatient {
  _id?: string;
  name: string;
  lastname: string;
  typeOfDocument: string;
  documentNumber: string;
  medicalHistoryNumber: string;
  enabled: true;
}
