import { PaymentCreate } from './payment'
import { UserLogin, UserToken, UserMerchantList, UserInfo } from './user'

import {
    MerchantConfirm, MerchantCreate, MerchantDelete,
    MerchantInfo, MerchantInvoices, MerchantUpdate, MerchantRegenKey
} from './merchant'

export { PaymentCreate }
export { UserLogin, UserToken, UserMerchantList, UserInfo }
export {
    MerchantConfirm, MerchantCreate, MerchantDelete,
    MerchantInfo, MerchantInvoices, MerchantUpdate, MerchantRegenKey
}

export type BackendRequest =
    | PaymentCreate

    | UserLogin
    | UserToken
    | UserMerchantList
    | UserInfo

    | MerchantInfo
    | MerchantCreate
    | MerchantDelete
    | MerchantUpdate
    | MerchantConfirm
    | MerchantInvoices
    | MerchantRegenKey
