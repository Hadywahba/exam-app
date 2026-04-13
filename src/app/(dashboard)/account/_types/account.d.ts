export type EditProfileResponse = {
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
    createdAt: string;
    updatedAt: string;
    profilePhoto: string | null;
  };
};

export type EditProfile = {
  firstName?: string;
  lastName?: string;
  phone?: string;
  profilePhoto?: string;
  email?: string;
};
