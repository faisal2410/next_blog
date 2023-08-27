import CredentialsProvider from "next-auth/providers/credentials";
import GoogleProvider from "next-auth/providers/google";
import User from "@/models/user";
import bcrypt from "bcrypt";
import dbConnect from "@/utils/dbConnect";



export const authOptions = {
    session: {
        strategy: "jwt",
    },
    providers: [
            GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
      
        CredentialsProvider({
            async authorize(credentials, req) {
                dbConnect();
                const { email, password } = credentials;
                const user = await User.findOne({ email });
                if (!user) {
                    throw new Error("Invalid email or password");
                }
                if (!user.password) {
                    throw new Error("Please login via the method you used to signup");
                }
                const isPasswordMatched = await bcrypt.compare(password, user.password);
                if (!isPasswordMatched) {
                    throw new Error("Invalid email or password");
                }
                return user;
            },
        }),
    ],
 
    secret: process.env.NEXTAUTH_SECRET,
    pages: {
        signIn: "/login",
    },
};
