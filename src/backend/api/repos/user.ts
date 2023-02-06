import { BackendClient } from '../../client'
import { NewResponse, responses } from '../../scheme/responses'
import { UserMerchantList, UserLogin, UserToken, UserInfo } from '../../scheme/requests'
import { RRes, tcheck } from '../utils/utils'
import { BasicRepo } from './repo'

const UserLoginResp = NewResponse(responses.user.login)
type UserLoginRespType = typeof UserLoginResp

const UserTokenResp = NewResponse(responses.user.token)
type UserTokenRespType = typeof UserTokenResp

const UserMerchantListResp = NewResponse(responses.user.merchant_list)
export type UserMerchantListRespType = typeof UserMerchantListResp

const UserInfoResp = NewResponse(responses.user.info)
export type UserInfoRespType = typeof UserInfoResp

class UserRepo extends BasicRepo {
    constructor (client: BackendClient) {
        super(client)
    }

    public async login (data: UserLogin): RRes<UserLoginRespType> {
        const path = '/api.user.login'
        const resp = await this._client.sendRequest(path, data)

        tcheck(UserLoginResp, resp)
        return resp.data
    }

    public async token (data: UserToken): RRes<UserTokenRespType> {
        const path = '/api.user.token'
        const resp = await this._client.sendRequest(path, data)

        tcheck(UserTokenResp, resp)
        return resp.data
    }

    public async merchantList (
        data: UserMerchantList
    ): RRes<UserMerchantListRespType> {
        const path = '/api.user.merchant_list'
        const resp = await this._client.sendRequest(path, data, true)

        tcheck(UserMerchantListResp, resp)
        return resp.data
    }

    public async info (data: UserInfo): RRes<UserInfoRespType> {
        const path = '/api.user.info'
        const resp = await this._client.sendRequest(path, data, true)

        tcheck(UserInfoResp, resp)
        return resp.data
    }
}

export { UserRepo }
