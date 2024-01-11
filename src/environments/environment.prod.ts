import { HttpHeaders } from "@angular/common/http";

export const environment = {
  production: true,
  url_server: "http://localhost:5000/api/pacientes", // "http://10.40.1.115:8086/"
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

/* export const environment = {
  production: true,
  url_server: "http://localhost:5000/api/pacientes", // "http://ec2-52-200-113-200.compute-1.amazonaws.com:8888/",
}; */
