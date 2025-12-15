export type EditProfileResponse = {
  user: {
    _id: string;
    username: string;
    firstName: string;
    lastName: string;
    email: string;
    phone: string;
    role: string;
    isVerified: boolean;
    createdAt: string;
    passwordResetCode?: string;
    passwordResetExpires?: string;
    resetCodeVerified?: boolean;
  };
};
