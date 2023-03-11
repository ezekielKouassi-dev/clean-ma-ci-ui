import { Injectable } from "@angular/core";

@Injectable({
    providedIn : 'root'
})
export class StorageService {

    constructor() {}

    get(key: string) {
        return localStorage.getItem(key);
    }

    set(paramter : Required<{key: string, value: any}>) {
        localStorage.setItem(paramter.key, paramter.value);
    }

    delete(key: string) {
        localStorage.removeItem(key);
    }
}