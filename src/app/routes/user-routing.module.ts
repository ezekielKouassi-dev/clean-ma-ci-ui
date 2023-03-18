import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { TimeLineComponent } from "../components/time-line/time-line.component";
import { CommonLayoutComponent } from "../layout/common-layout/common-layout.component";
import { LocalityManagementComponent } from "../pages/admin-pages/locality-management/locality-management.component";
import { PointOfDropManagementComponent } from "../pages/admin-pages/point-of-drop-management/point-of-drop-management.component";
import { ProcessingSocietyManagementComponent } from "../pages/admin-pages/processing-society-management/processing-society-management.component";
import { RanksManagementComponent } from "../pages/admin-pages/ranks-management/ranks-management.component";
import { DashboardManagerComponent } from "../pages/society-pages/dashboard-manager/dashboard-manager.component";
import { WorkManagementComponent } from "../pages/society-pages/work-management/work-management.component";
import { WorkAvailableComponent } from "../pages/user-pages/work-available/work-available.component";
import { WorkInProgressComponent } from "../pages/user-pages/work-in-progress/work-in-progress.component";
import { WorkLeaveComponent } from "../pages/user-pages/work-leave/work-leave.component";
import { WorkSuccessComponent } from "../pages/user-pages/work-success/work-success.component";

const routes:Routes = [
    {
        path: '',
        component : CommonLayoutComponent,
        children : [
            {
                path : '',
                redirectTo : 'time-line',
                pathMatch : 'full'
            },
            {
                path : 'assignments',
                component : WorkAvailableComponent
            },
            {
                path : 'time-line',
                component : TimeLineComponent
            },
            {
                path : 'assignmentsInProgress',
                component : WorkInProgressComponent
            },
            {
                path : 'assignmentsLeave',
                component : WorkLeaveComponent
            },
            {
                path : 'successAssignments',
                component : WorkSuccessComponent
            },
            {
                path : 'processing-society-management',
                component : ProcessingSocietyManagementComponent
            },
            {
                path : 'point-of-drop-management',
                component : PointOfDropManagementComponent
            },
            {
                path : 'locality-management',
                component : LocalityManagementComponent
            },
            {
                path : 'ranks-management',
                component : RanksManagementComponent
            },
            {
                path: 'work-management',
                component: WorkManagementComponent
            },
            {
                path: 'dashboard',
                component: DashboardManagerComponent
            }
        ]
    }
]

@NgModule({
    imports : [RouterModule.forChild(routes)],
    exports : [RouterModule]
})
export class UserRoutingModule {}