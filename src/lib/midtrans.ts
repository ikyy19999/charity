import midtransClient from 'midtrans-client'

// Create Snap API instance
const snap = new midtransClient.Snap({
    isProduction: process.env.MIDTRANS_IS_PRODUCTION === 'true',
    serverKey: process.env.MIDTRANS_SERVER_KEY ?? '',
    clientKey: process.env.MIDTRANS_CLIENT_KEY ?? ''
})

// atau untuk Core API (jika perlu)
const core = new midtransClient.CoreApi({ // Perhatikan: CoreAPI bukan CoreApi
    isProduction: process.env.MIDTRANS_IS_PRODUCTION === 'true',
    serverKey: process.env.MIDTRANS_SERVER_KEY ?? '',
    clientKey: process.env.MIDTRANS_CLIENT_KEY ?? ''
})

export { snap, core }