import { NextAuthOptions } from 'next-auth';
import Credentials from 'next-auth/providers/credentials';
import { LoginResponse } from './app/(auth)/login/_types/login';
export const authoption: NextAuthOptions = {
  providers: [
    // Credentials is one way to login
    Credentials({
      name: 'credential',
      credentials: {
        email: {},
        password: {},
      },
      //   authorize is a function that call backend
      authorize: async (credentials) => {
        const response = await fetch(`${process.env.API}/auth/signin`, {
          method: 'POST',
          body: JSON.stringify({
            email: credentials?.email,
            password: credentials?.password,
          }),
          headers: { 'Content-type': 'application/json' },
        });
        const payload: ApiResponse<LoginResponse> = await response.json();
        if ('code' in payload) {
          throw new Error(payload.message);
        }
        return {
          id: payload.user._id,
          accesstoken: payload.token,
          user: payload.user,
        };
      },
    }),
  ],
  callbacks: {
    jwt: ({ token, user }) => {
      if (user) {
        token.user = user.user;
        token.accesstoken = user.accesstoken;
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
