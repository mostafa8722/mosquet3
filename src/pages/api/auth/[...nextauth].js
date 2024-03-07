import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";



export const authOptions = {
  providers: [
      GoogleProvider({
          clientId: process.env.GOOGLE_CLIENT_ID ,
          clientSecret: process.env.GOOGLE_CLIENT_SECRET ,
      }),
  
  ],

  secret: process.env.NEXT_AUTH_SECRET ,
  cookies: {
      callbackUrl: {
          name: `__Secure-next-auth.callback-url`,
          options: {
              sameSite: "lax",
              path: "/",
              httpOnly: true,
              encode: () => process.env.NEXTAUTH_URL,
              secure: true,
          },
      },
  },
};
export default NextAuth(authOptions);