import midtransClient from 'midtrans-client'

const snap = new midtransClient.Snap({
  isProduction: process.env.NEXT_MIDTRANS_IS_PRODUCTION === 'true',
  serverKey: process.env.NEXT_MIDTRANS_SERVER_KEY ?? '',
  clientKey: process.env.NEXT_MIDTRANS_CLIENT_KEY ?? ''
})

export { snap }