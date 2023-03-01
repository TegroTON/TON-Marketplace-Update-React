import { Item, TonApi } from "./tonapi"

export class MarketNft {

    private _tonApi

    constructor () {
        this._tonApi = new TonApi()
    }

    public async getOneNft (address: string): Promise<Item | undefined>  {
        const data = await this._tonApi.getItems(address)

        if (!data) {
            return undefined
        }

        if (data.nft_items.length > 0) {
            return data.nft_items[0]
        }
        return undefined
    }
}