import { Address } from "ton"
import { NftSingleData, buildNftItemDeployMessage, buildSingleNftStateInit } from "./packages/contracts/nft-item/NftItem.data"
import { Queries } from "./packages/contracts/nft-collection/NftCollection.data"
import BN from "bn.js"

export interface CustomRoyaltyParams {
    royaltyFactor: number
    // denominator
    royaltyBase: number
    royaltyAddress: string
}

export interface CustomNftSingleData {
    ownerAddress: string,
    content: string,
    royaltyParams: CustomRoyaltyParams
}

export class CustomNft {

    constructor () {
        
    }

    public static async getBOCForSingleNft () {

    }
    public static async deploySingleNft (data: CustomNftSingleData) {
        const config: NftSingleData = {
            ownerAddress: Address.parse(data.ownerAddress),
            editorAddress: Address.parse(data.ownerAddress),
            content: data.content,
            royaltyParams: {
                royaltyFactor: data.royaltyParams.royaltyFactor,
                royaltyBase: data.royaltyParams.royaltyBase,
                royaltyAddress: Address.parse(data.royaltyParams.royaltyAddress)
            }
        }

        const msgStateInit = buildSingleNftStateInit(config)

        // const msg = Queries.mint({
        //     passAmount: new BN('1000000000'),
        //     itemIndex: 0,
        //     itemOwnerAddress: Address.parse(data.ownerAddress),
        //     itemContent: data.content
        // })

        return msgStateInit
    }
}