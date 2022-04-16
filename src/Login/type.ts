export type Userlogin = {
  username: string;
  password: string;
};

export type UserRegister = {
  username: string;
  email: string;
  password: string;
  confirmePassword: string;
};

export type backendRespnce = {
  status: number;
  message: string;
  hints?: string;
};
