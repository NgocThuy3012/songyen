import { IPermissionsPayload } from "./permissions";

export interface ILoginParams {
  username: string;
  password: string;
  role?: number;
}

export interface ILoginResponse {
  username: string;
  access_token: string;
  refresh_token: string;
}

export interface IProfileResponse {
  username: string;
  permissions: IPermissionsPayload[];
}
