import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { MaterialModule } from "app/shared/material-components.module";
import { BreadcrumbsModule } from "app/core/breadcrumbs/breadcrumbs.module";
import { SettingsComponent } from "./settings.component";
import { SettingsRoutingModule } from "./settings-routing.module";
import { HighlightModule } from "app/shared/highlightjs/highlight.module";
import { FuryCardModule } from "app/shared/card/card.module";
import { QuillModule } from "ngx-quill";
import { UserInfoService } from "shared/Services/user-info.service";
import { AppUserService } from "shared/Services/appuser.service";
import { SettingService } from "shared/Services/setting.service";

@NgModule({
  declarations: [SettingsComponent],
  imports: [
    CommonModule,
    SettingsRoutingModule,
    CommonModule,
    FormsModule,
    MaterialModule,
    ReactiveFormsModule,
    // Core
    HighlightModule,
    FuryCardModule,
    BreadcrumbsModule,
    QuillModule
  ],
  providers: [UserInfoService, AppUserService, SettingService],
  bootstrap: [SettingsComponent]
})
export class SettingsModule {}
