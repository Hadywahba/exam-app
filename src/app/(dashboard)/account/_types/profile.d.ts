export type ProfileResponse = {
  user: {
    id: string;
    username: string;
    firstName: string;
    lastName: string;
    email: string;
    phone: string;
    emailVerified: boolean;
    phoneVerified: boolean;
    createdAt: string;
    updatedAt: string;
    profilePhoto: string | null;
    role: string;
  };
};
