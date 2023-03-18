import { Injectable } from "@angular/core";
import { url_path } from "src/app/constants/constants";
import { UserService } from "../api/api-user.service";
import { ReloadService } from "../observable/reload.service";
import { StorageService } from "../storage/storage.service";

@Injectable({
    providedIn: 'root'
})
export class societyService{

    userInfo: any;
    constructor(private apiUser: UserService, private storage: StorageService, private reload: ReloadService) {}

    registerAssignment(assignment: any) {
        assignment['processingCompanyId'] = this.getUserId();
        console.log('what I recieve : --------->', assignment)
        return this.apiUser.post({endPoint: url_path.REGISTER_ASSIGNMENT, data: assignment});
    }

    getAllAssignment() {
        return this.apiUser.get(`${url_path.GET_ASSIGNMENT_BY_PROCESSING_COMPANY}/${this.getUserId()}/assignments`)
    }

    private getUserId() {
        const userInfoString = this.storage.get('userInfo');
        if(userInfoString != null) {
            this.userInfo = JSON.parse(userInfoString);
            return this.userInfo.id;
        }
        
        return null;
    }
}