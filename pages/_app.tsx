import {AppProps} from 'next/app';
// import "../styles/globals.css";
import Layout from '../components/Layout';


export default function App({Component, pageProps}:AppProps){
    return(
        <div>
            <Layout>
            <Component {...pageProps} />
            <style jsx global>{`
                a {
                    color:white;
                }
            `}</style>
            </Layout>
        </div>
    )
}




