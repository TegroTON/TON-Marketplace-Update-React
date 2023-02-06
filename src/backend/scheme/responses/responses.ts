import * as t from 'io-ts'

const merchantInfo = t.type({
    merchant_id: t.number, // merchant id
    name: t.string, // name
    code: t.string, // dns confirmation code
    address: t.string, // emv address like "0x12e...a5b"
    website: t.string, // domain like "example.com"
    api_key: t.string, // api key
    description: t.string, // description
    webhook_url: t.string, // webhook path like "/payment/confirm"
    redirect_url: t.string, // redirect url path like "/payment/ok"
    dns_confirmed: t.boolean, // dns confirmation status
    failed_attempts: t.number, // failed attempts
    registration_ts: t.number, // unix timestap of registration date
    webhook_status: t.union([ t.literal('active'), t.literal('error') ])
})

const isEmptyArray = (input: unknown): input is [] => Array.isArray(input) && input.length < 1

export const emptyArray = new t.Type<[], [], unknown>(
    'emptyArray',
    isEmptyArray,
    (input, context) => (isEmptyArray(input) ? t.success(input) : t.failure(input, context)),
    t.identity
)

const user = {
    login: t.type({ }),
    token: t.type({ jwt: t.string }),
    merchant_list: t.type({
        merchants: t.union([
            t.array(t.type({
                merchant_id: t.number,
                name: t.string,
                website: t.string,
                dns_confirmed: t.boolean
            })),
            emptyArray
        ])
    }),
    info: t.type({ email: t.string })
}

const merchant = {
    info: merchantInfo,
    create: merchantInfo,
    delete: t.type({ }),
    update: merchantInfo,
    confirm: t.type({ dns_confirmed: t.boolean }),
    invoices: t.array(
        t.type({
            uuid: t.string,
            amount: t.string,
            chain_id: t.number,
            tx_hash: t.string,
            currency: t.string,
            timestamp: t.number,
            status: t.union([
                t.literal('in_progress'),
                t.literal('completed'),
                t.literal('expired')
            ])
        })
    ),
    regen_key: t.type({ external_api_key: t.string })
}

const payment = {
    create: t.type({
        payment_link: t.string,
        payment_id: t.string
    })
}

const responses = { user, merchant, payment }

type PResponse =
    // ----------------------------------
    | typeof responses.user.login // api.user.login
    | typeof responses.user.token // api.user.token
    | typeof responses.user.merchant_list // api.user.merchant_list
    | typeof responses.user.info // api.user.info
    // ----------------------------------
    | typeof responses.merchant.info // api.merchant.info
    | typeof responses.merchant.create // api.merchant.create
    | typeof responses.merchant.delete // api.merchant.delete
    | typeof responses.merchant.update // api.merchant.update
    | typeof responses.merchant.confirm // api.merchant.confirm
    | typeof responses.merchant.invoices // api.merchant.invoices
    | typeof responses.merchant.regen_key // api.merchant.regen_key
    // ----------------------------------
    | typeof responses.payment.create // api.payment.create
    // ----------------------------------

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
const NewResponse = <T extends PResponse>(type: T) => t.union([
    t.type({ status: t.literal('ok'), result: type }),
    t.type({ status: t.literal('error'), code: t.number, desc: t.string })
])

export { NewResponse, PResponse, responses }
