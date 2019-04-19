import { Component, Injector, OnDestroy, OnInit } from "@angular/core";
import { AppComponentBase } from "shared/app-component-base";
import { Subscription } from "rxjs";
import { AppUserDto } from "shared/Models";
import { AuthenticationService } from "shared/Services";
import { UserInfoService } from "shared/Services/user-info.service";

@Component({
  selector: "fury-user-profile",
  templateUrl: "./user-profile.component.html",
  styleUrls: ["./user-profile.component.scss"]
})
export class UserProfileComponent extends AppComponentBase
  implements OnInit, OnDestroy {
  userInfo: AppUserDto = new AppUserDto();
  private subscription: Subscription;

  constructor(
    injector: Injector,
    private authService: AuthenticationService,
    private userInfoService: UserInfoService
  ) {
    super(injector);
    this.updateUserInfo();
  }

  ngOnInit() {
    this.subscription = this.userInfoService.getUserInfo().subscribe(user => {
      if (user) {
        this.userInfo = user;
      }
    });
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  updateUserInfo = () => {
    this.authService.getCurrentUser().subscribe(res => {
      const userData: AppUserDto = Object.assign(
        {},
        new AppUserDto(),
        res.Data
      );
      this.userInfoService.saveUserInfo(userData);
    });
  };
}
