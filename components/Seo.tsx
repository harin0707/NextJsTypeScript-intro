import Head from "next/head";

type propsType =   {
    title: string,
}

export default function Seo({title} : propsType) {
    
    return(
        <Head>
            <title> {title} | Next Movies</title>
        </Head>
    )
}