
import  bcrypt  from 'bcrypt';
import  GoogleProvider  from 'next-auth/providers/google';
import NextAuth, { AuthOptions } from 'next-auth';
import  CredentialProvider  from "next-auth/providers/credentials";
import  db  from '@/db';
import { PrismaAdapter } from "@next-auth/prisma-adapter";



export const authOptions:AuthOptions={
  adapter:PrismaAdapter(db),
  providers: [
    GoogleProvider({
      clientId:process.env.GOOGLE_CLIENT_ID as string,
      clientSecret:process.env.GOOGLE_CLIENT_SECRET as string,
  }),

  // CredentialProvider({
  //   name: "credential",
  //   credentials: {
  //     email: { label: "email", type: "text" },
  //     password: { label: "password", type: "password" },
  //   },
  //   async authorize(credentials) {
  //     if (!credentials?.email || !credentials?.password) {
  //       throw new Error("Invalid credentials");
  //     }
  //     // Check if the user exists in the database
  //     let user = await db.user.findUnique({
  //       where: {
  //         email: credentials.email,
  //       },
  //     });
  //     // If not, create a new user with hashed password
  //     if (!user) {
  //       const hashedPassword = await bcrypt.hash(credentials.password, 10);
  //       user = await db.user.create({
  //         data: {
  //           email: credentials.email,
  //           hashedPassword,
  //         },
  //       });
  //     }
  //     // If yes, verify the password
  //     else if (!user.hashedPassword) {
  //       throw new Error("Invalid credentials");
  //     } else {
  //       const isCorrectPassword = await bcrypt.compare(
  //         credentials.password,
  //         user.hashedPassword
  //       );
  //       if (!isCorrectPassword) {
  //         throw new Error("Invalid credentials");
  //       }
  //     }
  //     return user;
  //   },
  // }),
],
callbacks: {
 async jwt({ token, session, user }) {
    // Persist the OAuth access_token and or the user id to the token right after signin
    if (user) {
      return {
        ...session,
        id:user.id
      }
    }
    return token
  },
  async session({session,token,user}) {
    console.log("callback session"+{session,token,user})
    if (user) {
      return {
        ...session,
        user:{
          ...session.user,
          id:token.id
        }
      }
    }
    return session;
  }
},
  // session({ session, user }) {
  //   // Check if JWT callback added custom data
  //   // if (user.id) {
  //   //   session.user.id = user.id;
  //   // }
  //   // if (token.accessToken) {
  //   //   session.accessToken = token.accessToken;
  //   // }
  //   return user.id;
  // },
// debug:process.env.NODE_ENV!=="production",
session:{
  strategy:"jwt"
},

secret:process.env.NEXTAUTH_SECRET
};