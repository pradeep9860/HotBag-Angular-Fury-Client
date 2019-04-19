import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { UserProfileComponent } from "./user-profile.component";
import { AuthGuard } from "shared/Guards";

@NgModule({
  imports: [
    RouterModule.forChild([
      // {
      //   path: ":mode",
      //   loadChildren:
      //     "app/pages/admin/app-user/app-user-actions/app-user-action.module#AppUserActionModule",
      //   canActivate: [AuthGuard]
      // },
      {
        path: "",
        component: UserProfileComponent,
        canActivate: [AuthGuard]
      }
    ])
  ],
  exports: [RouterModule]
})
export class UserProfileRoutingModule {}
