import { Injectable } from "@angular/core";
import { IProcessingCompany } from "src/app/interfaces/processing-company.model";
import { AdminService } from "../api/api-admin.service";
import { StorageService } from "../storage/storage.service";

@Injectable({
    providedIn: 'root'
})
export class AdminConsumerService{
    userInfo : any;

    constructor(private storage: StorageService, private adminService: AdminService) {}

    registerProcessing(processingCompany: IProcessingCompany) {
        return this.adminService.post({endPoint: `api/v1/processingCompany/admin/${this.getUserId()}`, data: processingCompany});
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