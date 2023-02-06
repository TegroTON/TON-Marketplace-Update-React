export interface MerchantInfo {
    merchant_id: number
}

export interface MerchantCreate {
    name: string,
    address: string,
    description: string,
    website: string
}

export interface MerchantDelete {
    merchant_id: number
}

export interface MerchantUpdate {
    merchant_id: number,
    name?: string,
    address?: string,
    description?: string,
    api_key?: boolean,
    redirect_url?: string,
    webhook_url?: string
}

export interface MerchantConfirm {
    merchant_id: number
}

export interface MerchantInvoices {
    merchant_id: number,
    page?: number,
    limit?: number
}

export interface MerchantRegenKey {
    merchant_id: number
}
