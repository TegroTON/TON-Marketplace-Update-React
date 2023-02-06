import { BackendClient } from '../../client'
import { NewResponse, responses } from '../../scheme/responses'
import { RRes, tcheck } from '../utils/utils'

import {
    MerchantConfirm, MerchantCreate, MerchantDelete,
    MerchantInfo, MerchantInvoices, MerchantUpdate, MerchantRegenKey
} from '../../scheme/requests'
import { BasicRepo } from './repo'

const MerchantInfoResp = NewResponse(responses.merchant.info)
type MerchantInfoRespType = typeof MerchantInfoResp

const MerchantCreateResp = NewResponse(responses.merchant.create)
type MerchantCreateRespType = typeof MerchantCreateResp

const MerchantDeleteResp = NewResponse(responses.merchant.delete)
type MerchantDeleteRespType = typeof MerchantDeleteResp

const MerchantUpdateResp = NewResponse(responses.merchant.update)
type MerchantUpdateRespType = typeof MerchantUpdateResp

const MerchantConfirmResp = NewResponse(responses.merchant.confirm)
type MerchantConfirmRespType = typeof MerchantConfirmResp

const MerchantInvoicesResp = NewResponse(responses.merchant.invoices)
type MerchantInvoicesRespType = typeof MerchantInvoicesResp

const MerchantRegenKeyResp = NewResponse(responses.merchant.regen_key)
type MerchantRegenKeyRespType = typeof MerchantRegenKeyResp

class MerchantRepo extends BasicRepo {
    constructor (client: BackendClient) {
        super(client)
    }

    public async info (data: MerchantInfo): RRes<MerchantInfoRespType> {
        const path = '/api.merchant.info'
        const resp = await this._client.sendRequest(path, data, true)

        tcheck(MerchantInfoResp, resp)
        return resp.data
    }

    public async create (data: MerchantCreate): RRes<MerchantCreateRespType> {
        const path = '/api.merchant.create'
        const resp = await this._client.sendRequest(path, data, true)

        tcheck(MerchantCreateResp, resp)
        return resp.data
    }

    public async delete (data: MerchantDelete): RRes<MerchantDeleteRespType> {
        const path = '/api.merchant.delete'
        const resp = await this._client.sendRequest(path, data, true)

        tcheck(MerchantDeleteResp, resp)
        return resp.data
    }

    public async update (data: MerchantUpdate): RRes<MerchantUpdateRespType> {
        const path = '/api.merchant.update'
        const resp = await this._client.sendRequest(path, data, true)

        tcheck(MerchantUpdateResp, resp)
        return resp.data
    }

    public async confirm (data: MerchantConfirm): RRes<MerchantConfirmRespType> {
        const path = '/api.merchant.confirm'
        const resp = await this._client.sendRequest(path, data, true)

        tcheck(MerchantConfirmResp, resp)
        return resp.data
    }

    public async invoices (data: MerchantInvoices): RRes<MerchantInvoicesRespType> {
        const path = '/api.merchant.invoices'
        const resp = await this._client.sendRequest(path, data, true)

        tcheck(MerchantInvoicesResp, resp)
        return resp.data
    }

    public async regen_key (data: MerchantRegenKey): RRes<MerchantRegenKeyRespType> {
        const path = '/api.merchant.regen_key'
        const resp = await this._client.sendRequest(path, data, true)

        tcheck(MerchantRegenKeyResp, resp)
        return resp.data
    }
}

export { MerchantRepo }
