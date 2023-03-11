import { CommonModule } from '@angular/common';
import { NgModule } from "@angular/core";
import { SideBarComponent } from "../components/side-bar/side-bar.component";
import { CommonLayoutComponent } from "../layout/common-layout/common-layout.component";
import { UserRoutingModule } from "../routes/user-routing.module";
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { NzMenuModule } from 'ng-zorro-antd/menu';
import { NzTableModule } from 'ng-zorro-antd/table';
import { NzTimelineModule } from 'ng-zorro-antd/timeline';
import { AssignmentsComponent } from "../components/shared/assignments/assignments.component";
import { TimeLineComponent } from "../components/time-line/time-line.component";
import { TableAssignmentsComponent } from "../components/table-assignments/table-assignments.component";
import { DataTablesModule } from 'angular-datatables';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzAvatarModule } from 'ng-zorro-antd/avatar';
import { TableAssignmentsInProgressComponent } from '../components/table-assignments-in-progress/table-assignments-in-progress.component';

@NgModule({
    declarations: [
        CommonLayoutComponent,
        SideBarComponent,
        AssignmentsComponent,
        TimeLineComponent,
        TableAssignmentsComponent,
        TableAssignmentsInProgressComponent
    ],
    imports: [
        CommonModule,
        UserRoutingModule, 
        NzLayoutModule,
        NzMenuModule,
        NzTimelineModule,
        NzTableModule,
        DataTablesModule,
        NzButtonModule,
        NzIconModule,
        NzAvatarModule
    ],
    exports: [
        CommonLayoutComponent, 
        SideBarComponent, 
        AssignmentsComponent,
        TimeLineComponent,
        TableAssignmentsComponent
    ]
})
export class UserModule {

}