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

@NgModule({
    declarations: [
        CommonLayoutComponent,
        SideBarComponent,
        AssignmentsComponent,
        TimeLineComponent,
        TableAssignmentsComponent
    ],
    imports: [
        CommonModule,
        UserRoutingModule, 
        NzLayoutModule,
        NzMenuModule,
        NzTimelineModule,
        NzTableModule
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