export type LoginResponse = {
  token: string;
  user: {
    id: string;
    username: string;
    firstName: string;
    lastName: string;
    email: string;
    phone: string;
    role: string;
    emailVerified: boolean;
    phoneVerified: boolean;
  };
};
