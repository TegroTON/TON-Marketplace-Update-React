import axios from "axios"
import { Address, Coins } from "ton3"

export function getParameterByName (name: string, url = window.location.href) {
    const name1 = name.replace(/[\[\]]/g, '\\$&')
    const regex = new RegExp(`[?&]${name1}(=([^&#]*)|&|#|$)`)
    const results = regex.exec(url)
    if (!results) return null
    if (!results[2]) return ''
    return decodeURIComponent(results[2].replace(/\+/g, ' '))
}

export function fixAmount (nanoAmount: string | number) {
    const coin = Coins.fromNano(nanoAmount).toString()
    return coin
    // const amount = (Number(nanoAmount) / (10 ** 9))
    // // console.log(amount)
    // let stringAmount = Number(amount).toFixed(2)

    // if (Number(stringAmount) === 0) {
    //     stringAmount = Number(amount).toFixed(4)
    // }
    // return stringAmount
}

export function rawToTon (address: string | undefined) {
    if (!address) {
        return ''
    }
    const addr = new Address(address, {bounceable: true}).toString('base64')
    return addr
}

export function smlAddr (address: string | undefined) {
    if (!address) {
        return ''
    }
    return address.slice(0, 7) + '...' + address.slice(address.length - 4, address.length)
}

// https://app.tonkeeper.com/v1/txrequest-inline/eyJ2ZXJzaW9uIjoiMCIsImJvZHkiOnsidHlwZSI6InNpZ24tcmF3LXBheWxvYWQiLCJwYXJhbXMiOnsibWVzc2FnZXMiOlt7ImFkZHJlc3MiOiJFUURLbEprSFF5RzMwcHgwU2Z0ZjVpX19hdDR0SG9vdl9hbndmeHA2WXJCZTI5UzciLCJhbW91bnQiOiI2MGUyMzUzYzAifV19fX0
// https://app.tonkeeper.com/v1/txrequest-url/api.getgems.io/storage/simple?key=88a6b81b-5bf1-42c1-a30a-efad9111bb0d
export async function getPriceTon () {
    const toncoinData = await axios.get(` https://api.coingecko.com/api/v3/coins/the-open-network`);
    if (!toncoinData) return 0
    if (!toncoinData.data) return 0
    if (!toncoinData.data.market_data) return 0
    return toncoinData.data.market_data.current_price.usd ?? 0
}