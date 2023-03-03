import { Collection, Collections, Item, TonApi } from "./tonapi"

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

    public async getCollection (address: string): Promise<Collection | undefined>  {
        const data = await this._tonApi.getCollection(address)

        if (!data) {
            return undefined
        }
        return data
    }

    public async getCollections (page: number = 0): Promise<Collection[] | undefined>  {
        const limit = 50
        const off = page * limit
        const data = await this._tonApi.getCollections(limit, off)

        if (!data) {
            return undefined
        }

        if (data.nft_collections.length > 0) {
            return data.nft_collections
        }
        return undefined
    }

    public async getItemsFromCollection (address: string, page: number = 0): Promise<Item[] | undefined>  {
        const limit = 50
        const off = page * limit
        const data = await this._tonApi.searchItems(address, limit, off)

        if (!data) {
            return undefined
        }

        if (data.nft_items.length > 0) {
            return data.nft_items
        }
        return undefined
    }

    public async getAllItems ( page: number = 0): Promise<Item[] | undefined>  {
        const limit = 15
        const off = page * limit
        const data = await this._tonApi.searchItemsfull(limit, off)

        if (!data) {
            return undefined
        }

        if (data.nft_items.length > 0) {
            return data.nft_items
        }
        return undefined
    }
}