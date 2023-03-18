import { Injectable } from "@angular/core";
import { statusColors } from "ng-zorro-antd/core/color";
import { BehaviorSubject, Subject } from "rxjs";

@Injectable({
    providedIn: 'root'
})
export class ReloadService {
    private isClicked = new Subject<Boolean>();
    isClicked$ = this.isClicked.asObservable();

    private assignmentRegister = new Subject<Boolean>();
    assignmentRegister$ = this.assignmentRegister.asObservable();

    private data$ = new BehaviorSubject<any[]>([]);

    constructor() {

    }

    emit(status: boolean) {
        this.isClicked.next(status);
    }

    emitAssignment(status: boolean) {
        this.assignmentRegister.next(status);
    }

    getData() {
        return this.data$.asObservable();
    }

    emitSubject(list: any) {
        this.data$.next(list);
    }
}