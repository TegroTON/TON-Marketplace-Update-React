import { BackendClient } from '../client'
import { UserRepo } from './repos/user'
import { MerchantRepo } from './repos/merchant'
import { PaymentRepo } from './repos/payment'

export function NewReposWithClient (
    client: BackendClient
): { user: UserRepo, merch: MerchantRepo, pay: PaymentRepo } {
    return {
        user: new UserRepo(client),
        merch: new MerchantRepo(client),
        pay: new PaymentRepo(client)
    }
}

export { UserRepo, MerchantRepo, PaymentRepo }
