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
import { LocalityManagementComponent } from '../pages/admin-pages/locality-management/locality-management.component';
import { PointOfDropManagementComponent } from '../pages/admin-pages/point-of-drop-management/point-of-drop-management.component';
import { ProcessingSocietyManagementComponent } from '../pages/admin-pages/processing-society-management/processing-society-management.component';
import { RanksManagementComponent } from '../pages/admin-pages/ranks-management/ranks-management.component';
import { WorkManagementComponent } from '../pages/society-pages/work-management/work-management.component';
import { RegisterSocietyComponent } from '../components/register-society/register-society.component';
import { NzFormModule } from 'ng-zorro-antd/form';
import { NzModalService } from 'ng-zorro-antd/modal';
import { ReactiveFormsModule } from '@angular/forms';
import { RegisterLocalityComponent } from '../components/register-locality/register-locality.component';
import { RegisterPointOfDropComponent } from '../components/register-point-of-drop/register-point-of-drop.component';
import { NzCardModule } from 'ng-zorro-antd/card';
import { AssignmentComponent } from '../components/shared/assignment/assignment.component';
import { RegisterAssignmentComponent } from '../components/register-assignment/register-assignment.component';
import { DashboardManagerComponent } from '../pages/society-pages/dashboard-manager/dashboard-manager.component';
import { CardDashboardComponent } from '../components/card-dashboard/card-dashboard.component';
import { BarChartComponent } from '../components/bar-chart/bar-chart.component';
import { StatsComponent } from '../components/shared/stats/stats.component';
import { StatisticsComponent } from '../pages/user-pages/statistics/statistics.component';

@NgModule({
    declarations: [
        CommonLayoutComponent,
        TimeLineComponent,
        BadgeComponent,
        TableComponent,
        WorkAvailableComponent,
        WorkInProgressComponent,
        WorkLeaveComponent,
        WorkSuccessComponent,
        LocalityManagementComponent,
        PointOfDropManagementComponent,
        ProcessingSocietyManagementComponent,
        RanksManagementComponent,
        WorkManagementComponent,
        RegisterSocietyComponent,
        RegisterLocalityComponent,
        RegisterPointOfDropComponent,
        RegisterAssignmentComponent,
        AssignmentComponent,
        DashboardManagerComponent,
        CardDashboardComponent,
        BarChartComponent,
        StatsComponent,
        StatisticsComponent
    ],
    imports: [
        CommonModule,
        ReactiveFormsModule,
        UserRoutingModule, 
        NzLayoutModule,
        NzMenuModule,
        NzTimelineModule,
        NzTableModule,
        DataTablesModule,
        NzButtonModule,
        NzIconModule,
        NzAvatarModule,
        NgxPaginationModule,
        NzFormModule,
        NzCardModule,
        
    ],
    exports: [
        CommonLayoutComponent, 
        TimeLineComponent,
    ],
    providers: [
        NzModalService
    ]
})
export class UserModule {

}