import { Injectable } from "@angular/core";
import { url_path } from "src/app/constants/constants";
import { UserService } from "../api/api-user.service";
import { StorageService } from "../storage/storage.service";

@Injectable({
    providedIn : 'root'
})
export class UserConsumerService {
    userInfo : any;

    constructor(private userService : UserService,
        private storage : StorageService) {}

    getListOfAssignment() {
        return this.userService.get(`${url_path.ASSIGNMENT_LIST}/${this.getUserId()}`);
    }

    acceptAssignment(assignmentId : number) {
        return this.userService.post({endPoint : `api/v1/users/${this.getUserId()}/assignments/${assignmentId}`, data : null})
    }

    getListOfUserAssignments(state : string) {
        return this.userService.get(`api/v1/assignmentUser/${this.getUserId()}/${state}`);
    }


    leaveAssignment(assignmentId : number) {
        return this.userService.patch({endPoint:`api/v1/users/${this.getUserId()}/assignments/${assignmentId}`, data: null});
    }

    getStats() {
        return this.userService.get(`api/v1/assignmentUser/${this.getUserId()}/statistics`);
    }



    // TODO: exportr this function in a separed file
    private getUserId() {
        const userInfoString = this.storage.get('userInfo');
        if(userInfoString != null) {
            this.userInfo = JSON.parse(userInfoString);
            return this.userInfo.id;
        }
        
        return null;
    }
}