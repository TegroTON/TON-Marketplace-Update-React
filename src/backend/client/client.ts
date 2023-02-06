import axios, { AxiosResponse } from 'axios'
import { BackendRequest } from '../scheme/requests'
import { PResponse } from '../scheme/responses'

export interface BackendOptions {
    url: string,
    jwt?: string
}

class BackendClient {
    private _url: string

    private _jwt: string

    constructor (options: BackendOptions) {
        this._url = options.url
        this._jwt = options.jwt || ''
    }

    private buildAuthorizationHeaders (): { [key: string]: string } {
        return { token: this._jwt }
    }

    public async sendRequest (
        path: string,
        data: BackendRequest,
        auth: boolean = false
    ): Promise<AxiosResponse<any, any>> {
        const headers = auth ? this.buildAuthorizationHeaders() : {}

        const resp = await axios({
            url: `${this._url}${path}`,
            method: 'post',
            headers,
            data
        })

        return resp
    }

    public setJwt (jwt: string): void {
        this._jwt = jwt
    }

    public get jwt (): string {
        return this._jwt
    }
}

export { BackendClient }
