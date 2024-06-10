export type RegisterForm = {
  username: string;
  email: string;
  password: string;
};

export type LoginForm = {
  email: string;
  password: string;
};

export type UserLogin = {
  token: string;
  user: {
    _id: string;
  };
};
