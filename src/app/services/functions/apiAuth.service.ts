import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { environnment } from "src/app/environnements/environnement";

@Injectable({
    providedIn: 'root'
})
export class AuthService {
    constructor(private http: HttpClient) { }

    post(parameter: Required<{ endpoint: string, data: any }>) {
        return this.http.post(`${environnment.BASE_URL}${parameter.endpoint}`, parameter.data, { headers: this.httpHeader() });
    }

    httpHeader() {
        return new HttpHeaders({
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*',
            'Access-Control-Allow-Methods': 'POST',
            'Accept': 'application/json',
        });
    }
}
