import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { ReactiveFormsModule } from "@angular/forms";
import { MaterialModule } from "../../../shared/material-components.module";
import { LoginRoutingModule } from "./login-routing.module";
import { LoginComponent } from "./login.component";
import { AuthenticationService } from "shared/Services";
import { AlertComponent } from "shared/Directives";
@NgModule({
  imports: [
    CommonModule,
    LoginRoutingModule,
    MaterialModule,
    ReactiveFormsModule
  ],
  providers: [AuthenticationService],
  declarations: [LoginComponent, AlertComponent]
})
export class LoginModule {}
