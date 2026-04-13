import { NextAuthOptions } from 'next-auth';
import Credentials from 'next-auth/providers/credentials';
import { LoginResponse } from './app/(auth)/login/_types/login';
export const authoption: NextAuthOptions = {
  providers: [
    // Credentials provider allows users to sign in with email and password
    Credentials({
      name: 'credential',
      credentials: {
        username: {},
        password: {},
      },
      // authorize is a function that calls the backend
      authorize: async (credentials) => {
        const response = await fetch(`${process.env.API}/auth/login`, {
          method: 'POST',
          body: JSON.stringify({
            username: credentials?.username,
            password: credentials?.password,
          }),
          headers: { 'Content-type': 'application/json' },
        });
        const payload: ApiResponse<LoginResponse> = await response.json();
        if (payload.status === false) {
          throw new Error(payload.message);
        }
        return {
          id: payload.payload.user.id,
          accesstoken: payload.payload.token,
          user: payload.payload.user,
        };
      },
    }),
  ],
  callbacks: {
    jwt: ({ token, user, trigger, session }) => {
      if (user) {
        token.user = user.user;
        token.accesstoken = user.accesstoken;
      }

      // It Used For Change Password
      if (trigger === 'update' && session) {
        token.user = {
          ...token.user,
          ...session.user,
        };
      }
      return token;
    },
    session: ({ session, token }) => {
      session.user = token.user;
      return session;
    },
  },
  pages: {
    signIn: '/login',
    signOut: '/login',
    error: '/login',
  },
};
