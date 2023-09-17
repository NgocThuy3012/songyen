export interface IGetEmployeesParams {
  input?: {
    q?: string;
  };
}

export interface IGetEmployeesResponse {
  fullname: string;

  id: string;

  username: string;

  email: string;
}

export interface ICreateEmployeeParams {
  fullname: string;

  username: string;

  email: string;

  password: string;
}

export interface ICreateEmployeeForm extends ICreateEmployeeParams {}

export interface IUpdateEmployeeParams extends ICreateEmployeeParams {}

export interface IGetDetailEmployeeResponse {
  id: string;

  username: string;

  email: string;
}

export interface IEmptyResponse {
  data: { data: { data: null; page: 1; pages: 0 } };
}
