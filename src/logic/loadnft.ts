import { Collection, Item, TonApi } from "./tonapi"

export class MarketNft {

    private _tonApi

    constructor () {
        this._tonApi = new TonApi()
    }

    public async getOneNft (address: string): Promise<{ nft: Item, collection: Collection | undefined} | undefined>  {
        const data = await this._tonApi.getItems(address)

        if (!data) {
            return undefined
        }

        if (data.nft_items.length > 0) {
            const collection = data.nft_items[0].collection ? 
            await this._tonApi.getCollection(data.nft_items[0].collection.address) : undefined
            return { nft: data.nft_items[0], collection: collection }
        }
        return undefined
    }
}