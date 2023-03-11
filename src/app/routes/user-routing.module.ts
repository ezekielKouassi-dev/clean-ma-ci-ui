import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AssignmentsComponent } from "../components/shared/assignments/assignments.component";
import { TableAssignmentsComponent } from "../components/table-assignments/table-assignments.component";
import { TimeLineComponent } from "../components/time-line/time-line.component";
import { CommonLayoutComponent } from "../layout/common-layout/common-layout.component";

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
                component : TableAssignmentsComponent
            },
            {
                path : 'time-line',
                component : TimeLineComponent
            }
        ]
    }
]

@NgModule({
    imports : [RouterModule.forChild(routes)],
    exports : [RouterModule]
})
export class UserRoutingModule {}