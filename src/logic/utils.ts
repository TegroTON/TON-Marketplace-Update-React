import { Coins } from "ton3"

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