import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { environnment } from "src/app/environnements/environnement";

@Injectable({
    providedIn: 'root'
})
export class UserService {


    constructor(private http: HttpClient) { }

    get(endPoint: string) {
        return this.http.get(`${environnment.BASE_URL}${endPoint}`, { headers: this.headerHttp() });
    }

    post(parameter: Required<{ endPoint: string, data: any }>) {
        return this.http.post(`${environnment.BASE_URL}${parameter.endPoint}`, parameter.data, { headers: this.headerHttp() });
    }

    headerHttp() {
        return new HttpHeaders({
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*',
            'Access-Control-Allow-Methods': 'POST, GET, OPTIONS, PUT,DELETE',
            'Accept': 'application/json'
        })
    }
}