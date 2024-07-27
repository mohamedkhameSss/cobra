import nextAuth from "next-auth";

declare module "next-auth" {
    interface Session {
        user:{
            id:string;
            name?:string| null;
            email:string| null;
            address?:string| null;
            hashedPassword:string| null;
            emailVerified?:string| null;
            image?:string|null;
            accessToken:string
        }
    }
}