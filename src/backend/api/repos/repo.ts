import { BackendClient } from '../../client/client'

class BasicRepo  {
    readonly _client: BackendClient

    constructor (client: BackendClient) {
        this._client = client
    }
}

export { BasicRepo }
