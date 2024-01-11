import { HttpHeaders } from "@angular/common/http";

export const environment = {
  production: false,
  url_server: "http://localhost:5000/api/pacientes", // "http://127.0.0.1:5000", // "http://localhost:8086/", 
  url_demo_in_office: "", // "http://10.40.1.115:8086/",
  url_demo_out_office: "http://localhost:5000/api/pacientes" // "http://127.0.0.1:5000" // "http://200.41.39.117:8086/"
};

export let httpOptions = {
  headers: new HttpHeaders({//'Content-Type': 'application/json',
  ///'accept': 'application/json',
  'Accept-Language': 'es',
  //'Access-Control-Allow-Headers': 'Content-Type',
  //'Access-Control-Allow-Methods': 'GET',
  //'Access-Control-Allow-Origin': '*',
  //'Access-Control-Allow-Credentials': 'true',
  //'cod_red':'123'
  }),
  params: null,
  withCredentials: true
}
