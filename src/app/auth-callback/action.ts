'use server'

import  db from '@/db'
import { authOptions } from '@/lib/providers'

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
}