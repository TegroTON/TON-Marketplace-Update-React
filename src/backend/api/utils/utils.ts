import * as t from 'io-ts'
import { AxiosResponse } from 'axios'

export type RRes<T extends t.Any> = Promise<t.OutputOf<T>>

export function tcheck (ty: t.Any, resp: AxiosResponse<any, any>): void {
    if (!ty.is(resp.data)) {
        throw new Error('got result with mismatched type')
    }
}
