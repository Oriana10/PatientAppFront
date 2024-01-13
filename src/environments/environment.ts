import { HttpHeaders } from "@angular/common/http";

export const environment = {
  production: false,
  url_server: "http://localhost:8003", // "http://10.40.1.115:8086/",
  url_demo_in_office: "",
  url_demo_out_office: "http://localhost:8003"
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
