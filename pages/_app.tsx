import {AppProps} from 'next/app';
import {QueryClient, QueryClientProvider} from 'react-query'
import Layout from '../components/Layout';
// import "../styles/globals.css";



export default function App({Component, pageProps}:AppProps){
    const client = new QueryClient();

    return(
            <Layout>
                <QueryClientProvider client={client}>
                    <Component {...pageProps} />
                    <style jsx global>{`
                        a {
                            color:white;
                        }
                    `}</style>
                </QueryClientProvider>
            </Layout>
    )
}




