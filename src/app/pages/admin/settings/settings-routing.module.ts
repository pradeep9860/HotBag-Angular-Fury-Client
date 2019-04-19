import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { SettingsComponent } from "./settings.component";
import { AuthGuard } from "shared/Guards";

@NgModule({
  imports: [
    RouterModule.forChild([
      {
        path: "",
        component: SettingsComponent,
        canActivate: [AuthGuard]
      }
    ])
  ],
  exports: [RouterModule]
})
export class SettingsRoutingModule {}
