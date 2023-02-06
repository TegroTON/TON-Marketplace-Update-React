import { BackendClient } from '../../client'
import { NewResponse, responses } from '../../scheme/responses'
import { PaymentCreate } from '../../scheme/requests'
import { RRes, tcheck } from '../utils/utils'
import { BasicRepo } from './repo'

const PaymentCreateResp = NewResponse(responses.payment.create)
type PaymentCreateRespType = typeof PaymentCreateResp

class PaymentRepo extends BasicRepo  {
    constructor (client: BackendClient) {
        super(client)
    }

    public async create (data: PaymentCreate): RRes<PaymentCreateRespType> {
        const path = '/api.payment.create'
        const resp = await this._client.sendRequest(path, data, true)

        tcheck(PaymentCreateResp, resp)
        return resp.data
    }
}

export { PaymentRepo }
