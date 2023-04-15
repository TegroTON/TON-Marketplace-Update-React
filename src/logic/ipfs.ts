import axios from "axios"

export class CustomIpfs {
    private _ApiKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJkaWQ6ZXRocjoweEYxMTYzMmM5Y2QzNEU3RjY2OWIwNDEyRWJlOUNGNDBjQ0NmNjExQjUiLCJpc3MiOiJuZnQtc3RvcmFnZSIsImlhdCI6MTY0NDcxNjAyNjA5NSwibmFtZSI6InRlc3QifQ.Q5u50rL-7I9FhKyd9hZ21i2eCDB0J3oI6wT-uZa2FA8'

    private _url = 'https://api.nft.storage'

    public async send (url: string, data: any): Promise<any | undefined> {
        const res = await axios.post(`${this._url}${url}`, data, {
            headers: {
                'Authorization': `Bearer ${this._ApiKey}`,
                'Content-Type': 'multipart/form-data'
            }
        })

        if (!res.data.ok) {
            console.error(res.data.result)
            return undefined
        }
        return res.data
    }
    
    public async uploadDataJson (data: any): Promise<string | undefined> {
        const res = await this.send('/store', {meta: data})

        console.log(res)
        return res.value.ipnft
    }

}