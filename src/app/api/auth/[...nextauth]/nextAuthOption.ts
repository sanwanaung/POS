import { config } from "@/config/config";
import prisma from "@/lib/prisma/prisma";
import { NextAuthOptions } from "next-auth";
import { PrismaAdapter } from "@next-auth/prisma-adapter";
import { CredentialsProvider } from "next-auth/providers/credentials";
import { User } from "@prisma/client";

export const nextAuthOption: NextAuthOptions = {
  adapter: PrismaAdapter(prisma),
  session: {
    strategy: "jwt",
  },
  providers: [],
};
