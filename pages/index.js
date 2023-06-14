import Image from 'next/image';
import Head from 'next/head';
import Layout from '../components/layout';


export default function Home({data}) {

    return(
        <>
            <Head>
                <title>
                    My next.js app
                </title>
            </Head>
            <Layout>
                <h1>
                   HEllo world
                </h1>
                <Image 
                    src='/images/profile.jpg'
                    height={144}
                    width={144}
                    alt={'Your Name'}
                    prio
                    />
            </Layout>
        </>
    )
}

export async function getStaticProps() {
    const data = 5;

    return {
        props : {data : data}
    }
}