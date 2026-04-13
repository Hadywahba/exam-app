export type RegisterResponse = {
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
    createdAt: string;
    profilePhoto: string;
    phoneVerified: boolean;
    createdAt: string;
    updatedAt: string;
  };
};
