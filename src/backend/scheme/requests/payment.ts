export interface PaymentCreate {
    merchant_id: number,
    amount: string,
    asset: 'USDC' | 'USDT' | 'WETH',
    address?: string,
    description: string
}
