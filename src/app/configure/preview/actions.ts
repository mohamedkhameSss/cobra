
import { BASE_PRICE, PRODUCT_PRICES } from '@/config/products'
import { stripe } from '@/lib/stripe'
import { Order } from '@prisma/client'
import db from '@/db'
import { authOptions } from '@/lib/providers'
import { getServerSession } from 'next-auth'

export const createCheckoutSession = async ({
  configId,

}: {
  configId: string
  
}) => {
  const configuration = await db?.configuration?.findUnique({
    where:{id: configId}
  })
  

  if (!configuration) {
    throw new Error('No such configuration found')
  }

  
   const session = await getServerSession(authOptions)

  if (!session?.user) {
    throw new Error('You need to be logged in')
  }

  const { finish, material } = configuration

  let price = BASE_PRICE
  if (finish === 'textured') price += PRODUCT_PRICES.finish.textured
  if (material === 'polycarbonate')
    price += PRODUCT_PRICES.material.polycarbonate

  let order: Order | undefined = undefined

  const existingOrder = await db.order.findFirst({
    where: {
      userId: session.user.id,
      configurationId: configuration.id,
    },
  })

  console.log( configuration.id)

  if (existingOrder) {
    order = existingOrder
  } else {
    order = await db.order.create({
      data: {
        amount: price / 100,
        userId: session.user.id,
        configurationId: configuration.id,
      },
    })
  }

  const product = await stripe.products.create({
    name: 'Custom iPhone Case',
    images: [configuration.imageUrl],
    default_price_data: {
      currency: 'USD',
      unit_amount: price,
    },
  })

  const stripeSession = await stripe.checkout.sessions.create({
    success_url:`${process.env.NEXT_PUBLIC_SERVER_URL}/thank-you?orderId=${order.id}`,
    cancel_url:`${process.env.NEXT_PUBLIC_SERVER_URL}/configure/preview?id=${configuration.id}`,
    payment_method_types: ['card'],
    mode: 'payment',
    shipping_address_collection: { allowed_countries: ['DE', 'US'] },
    metadata: {
      userId: session.user.id,
      orderId: order.id,
    },
    line_items: [{ price: product.default_price as string, quantity: 1 }],
  })

  return { url: stripeSession.url }
}
