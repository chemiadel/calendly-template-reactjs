import type { NextPage, NextComponentType} from 'next'
import type { AppProps } from 'next/app'

export type CustomNextPage = NextPage & {
    layout? : string,
    title?: string
}


export type CustomNextComponent = NextComponentType & {
    subLayout?: string,
    subLayoutIndex?: number
}
