import Head from "next/head";
import HeadResult from '../types/common'

type HeadProps = {
    info : HeadResult
}

export default function Seo({info} : HeadProps) {
    const {title} = info;
    
    return(
        <Head>
            <title>{title} | Next Movies</title>
        </Head>
    )
}