"use server"

import  db  from "@/db"

import { authOptions } from "@/lib/providers"
import { getServerSession } from "next-auth";

export const getPaymentStatus = async ({orderId}:{orderId:string}) =>{
    const session= await getServerSession(authOptions)
    const user = session?.user
    

    if (!user?.id || !user.email) {
        throw new Error("you need to be logged in to view this page.")
    }

    const order = await db.order.findFirst({
        where:{id:orderId,userId:user.id},
        include:{
            BillingAdress:true,
            configuration:true,
            shippingAddress:true,
            user:true,
        }
    })
    if(!order) throw new Error("This order does not exist")

        if (order.isPaid) {
            return order 
        }else {
            return false
        }
}