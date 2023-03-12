import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { TimeLineComponent } from "../components/time-line/time-line.component";
import { CommonLayoutComponent } from "../layout/common-layout/common-layout.component";
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
            }
        ]
    }
]

@NgModule({
    imports : [RouterModule.forChild(routes)],
    exports : [RouterModule]
})
export class UserRoutingModule {}