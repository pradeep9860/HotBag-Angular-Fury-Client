export class LoginRequestModel {
  usernameOrEmail: string;
  password: string;
  isRemember: boolean;
}

export class LoginResponseModel {
  isLoginSuccess: boolean;
  token: string;
  expires: number;
  userId: string;
  fullName: string;
  email: string;
}
