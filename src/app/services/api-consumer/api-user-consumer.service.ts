import { Injectable } from "@angular/core";
import { url_path } from "src/app/constants/constants";
import { UserService } from "../api/api-user.service";

@Injectable({
    providedIn : 'root'
})
export class UserConsumerService {

    constructor(private userService : UserService) {}

    getListOfAssignment() {
        return this.userService.get(url_path.ASSIGNMENT_LIST);
    }
}