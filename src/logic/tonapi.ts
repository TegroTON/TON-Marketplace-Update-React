import axios from "axios"

interface Item {
    address: string,
    approved_by: any,
    collection: any | {
        address: string,
        name: string
    },
    collection_address: string | any,
    index: number,
    verified: boolean,
    metadata: {
        name: string | undefined,
        marketplace: string | undefined,
        image: string | undefined,
        description: string | undefined,
        attributes: undefined | []
    },
    previews: any,
    owner: undefined | {
        address: string,
        is_scam: boolean
    },
    sale: {
        address: string,
        market: undefined | {
            address: string,
            icon: string,
            is_scam: boolean,
            name: string
        },
        owner: {
            address: string,
            icon: string,
            is_scam: boolean,
            name: string
        },
        price: {
            token_name: string,
            value: string
        }
    }
}

interface Items {
    nft_items: Item[]
}

export class TonApi {
    private _url: string = 'https://tonapi.io/v1/'

    private _token: string = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJqdGkiOiIxMjI0Iiwic2NvcGUiOiJjbGllbnQifQ.vvtwTq9kO89CNP2635wImtrzshdrAM9AYaIbQNqfJHQ'

    public async send (url: string, data: any): Promise<any | undefined> {
        const res = await axios.get(`${this._url}${url}?${new URLSearchParams(data)}`,{
            headers: {
                'Authorization': `Bearer ${this._token}`
            }
        })

        if (res.data.status === 'error') {
            console.error(res.data.result)
            return undefined
        }
        return res.data
    }

    public async getItems (address: string): Promise<Items | undefined>  {
        const data = await this.send('nft/getItems', { addresses: address } )

        console.log(data)
        return data
    }
}

export type { Items, Item }