import { Injectable } from "@angular/core";
import { url_path } from "src/app/constants/constants";
import { ILocality } from "src/app/interfaces/locality.model";
import { IPointOfDrop } from "src/app/interfaces/point-of-drop.model";
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

    getAllProcessingCompany() {
        return this.adminService.get(url_path.PROCESSING_COMPANY_LIST);
    }

    registerLocality(locality: ILocality) {
        return this.adminService.post({endPoint: `${url_path.REGISTER_LOCALITY}/${this.getUserId()}`, data: locality})
    }

    getAllLocality() {
        return this.adminService.get(url_path.LOCALITY_LIST);
    }

    registerPointOfDrop(pointOfDrop: IPointOfDrop) {
        return this.adminService.post({endPoint: `${url_path.REGISTER_POINT_OF_DROP}/${this.getUserId()}`, data: pointOfDrop});
    }

    getAllPointOfDrop() {
        return this.adminService.get(url_path.POINT_OF_DROP_LIST);
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