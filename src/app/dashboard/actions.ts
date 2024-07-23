"use server"
import  db  from "@/db"
import { OrderStatus } from "@prisma/client"

interface changeOrderStatusType {
    id:string,
    newStatus:OrderStatus
}
export const changeOrderStatus = async ({id,newStatus}:changeOrderStatusType) => {
    await db.order.update({
        where:{id},
        data:{status:newStatus}
    })
}