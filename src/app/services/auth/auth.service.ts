import { Injectable } from "@angular/core";
import { url_path } from "src/app/constants/constants";
import { IUser } from "src/app/interfaces/user.model";
import { AuthService } from "../functions/apiAuth.service";

@Injectable({
    providedIn : 'root'
})
export class HttpService {
    constructor(private authService : AuthService) {}

    register(user : IUser) {
        return this.authService.post({endpoint : url_path.AUTH_REGISTER, data : user});
    }
}