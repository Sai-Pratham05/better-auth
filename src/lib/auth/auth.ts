import { betterAuth } from "better-auth";
import { prismaAdapter } from "better-auth/adapters/prisma";
// If your Prisma file is located elsewhere, you can change the path
import { prisma } from "../prisma";
import { nextCookies } from "better-auth/next-js";

export const auth = betterAuth({
  database: prismaAdapter(prisma, {
    provider: "postgresql", // or "mysql", "postgresql", ...etc
  }),
  emailAndPassword: {
    enabled: true,
    minPasswordLength: 6,
    maxPasswordLength: 128,
    autoSignIn: true, // Automatically sign in the user after they register
  },
  account: {
    accountLinking: {
      enabled: true,
    },
  }, //if a user signs in with google and then github, they will be linked to the same account
  socialProviders: {
    google: {
      clientId: process.env.GOOGLE_CLIENT_ID as string,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
    },
    github: {
      clientId: process.env.GITHUB_CLIENT_ID as string,
      clientSecret: process.env.GITHUB_CLIENT_SECRET as string,
    },
    
  },
  plugins: [nextCookies()],
});
