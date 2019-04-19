import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { AppUserComponent } from "./app-user.component";
import { AuthGuard } from "shared/Guards";

@NgModule({
  imports: [
    RouterModule.forChild([
      {
        path: ":mode",
        loadChildren:
          "app/pages/admin/app-user/app-user-actions/app-user-action.module#AppUserActionModule",
        canActivate: [AuthGuard]
      },
      {
        path: "",
        component: AppUserComponent,
        canActivate: [AuthGuard]
      }
    ])
  ],
  exports: [RouterModule]
})
export class AppUserRoutingModule {}
