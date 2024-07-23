

 
import  db  from "@/db";
import { authOptions } from "@/lib/providers";
import {getServerSession} from "next-auth/next"

export async function getSession() {
    return await getServerSession(authOptions)
}

export default async function getCurrentUser(authOptions: unknown) {
    try{
        const session =await getSession();
        if(!session?.user?.email){
            return null;
        }
        const currentUser =await db.user.findUnique({
            where:{
                email:session.user.email
            }
        })
        if (!currentUser) {
            return null;
            
        }
        return {
            ...currentUser,
            createdAt: currentUser.createdAt.toISOString(),
            updatedAt: currentUser.updatedAt.toISOString(),
            emailVerified: currentUser.emailVerified?.toISOString() || null
        };
    }catch (error:any){
        return null;
    }
}