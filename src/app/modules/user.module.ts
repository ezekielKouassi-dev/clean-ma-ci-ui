import { CommonModule } from '@angular/common';
import { NgModule } from "@angular/core";
import { CommonLayoutComponent } from "../layout/common-layout/common-layout.component";
import { UserRoutingModule } from "../routes/user-routing.module";
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { NzMenuModule } from 'ng-zorro-antd/menu';
import { NzTableModule } from 'ng-zorro-antd/table';
import { NzTimelineModule } from 'ng-zorro-antd/timeline';
import { TimeLineComponent } from "../components/time-line/time-line.component";
import { DataTablesModule } from 'angular-datatables';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzAvatarModule } from 'ng-zorro-antd/avatar';
import { BadgeComponent } from '../components/shared/badge/badge.component';
import { TableComponent } from '../components/shared/table/table.component';
import { NgxPaginationModule } from 'ngx-pagination';
import { WorkAvailableComponent } from '../pages/user-pages/work-available/work-available.component';
import { WorkInProgressComponent } from '../pages/user-pages/work-in-progress/work-in-progress.component';
import { WorkLeaveComponent } from '../pages/user-pages/work-leave/work-leave.component';
import { WorkSuccessComponent } from '../pages/user-pages/work-success/work-success.component';

@NgModule({
    declarations: [
        CommonLayoutComponent,
        TimeLineComponent,
        BadgeComponent,
        TableComponent,
        WorkAvailableComponent,
        WorkInProgressComponent,
        WorkLeaveComponent,
        WorkSuccessComponent
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
        NzAvatarModule,
        NgxPaginationModule
    ],
    exports: [
        CommonLayoutComponent, 
        TimeLineComponent,
    ]
})
export class UserModule {

}