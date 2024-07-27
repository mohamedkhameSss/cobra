import { PrismaClient } from "@prisma/client";

declare global {
    var prisma: PrismaClient | undefined
}
<<<<<<< HEAD
let prisma :PrismaClient
if(process.env.NODE_ENV === 'production'){
    prisma=new PrismaClient()
}else{
    if(!global.cachedPrisma){
        global.cachedPrisma=new PrismaClient()
    }
    prisma = global.cachedPrisma
}
export const db=prisma
=======
const db = globalThis.prisma || new PrismaClient()
if (process.env.NODE_ENV != "production")globalThis.prisma=db

export default db;
>>>>>>> 3d662cfbcd20407eeb1bac4ab8cde3f2ffe6c6d4
