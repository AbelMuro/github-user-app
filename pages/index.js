import Image from 'next/image';
import Head from 'next/head';
import Layout from '../components/layout';

export default function Home() {
    return(
        <>
            <Head>
                <title>
                    My next.js app
                </title>
            </Head>
            <Layout>
                <h1>
                    how are you?
                </h1>
                <Image 
                    src='/images/profile.jpg'
                    height={144}
                    width={144}
                    alt={'Your Name'}
                    />
            </Layout>
        </>
    )
}