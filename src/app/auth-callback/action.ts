'use server'

import  db from '@/db'
import { authOptions } from '@/lib/providers'

<<<<<<< HEAD
export const getAuthStatus=async () =>{
    const {getUser ,isAuthenticated}= getKindeServerSession()
    const user = await getUser()

    if(!user?.id || !user.email){
        throw new Error('invalid user data')
    }
    const existingUser =await db.user?.findFirst({
        where:{id: user.id}
    })
    
    if(!existingUser){
        await db.user.create({
            data:{
                id: user.id,
                email: user.email
            }
        })
    }
    return {success:true}
=======
import { getServerSession } from 'next-auth'

export const getAuthStatus = async () => {
  const  session  =await getServerSession(authOptions)
  const user= session?.user

  if ( !user?.email) {
    throw new Error('Invalid user data')
  }

  const existingUser = await db.user.findFirst({
    where: { email: user.email },
  })

  if (!existingUser) {
    await db.user.create({
      data: {
        email: user.email,
        id:user.id
      },
    })
  }

  return { success: true }
>>>>>>> 3d662cfbcd20407eeb1bac4ab8cde3f2ffe6c6d4
}