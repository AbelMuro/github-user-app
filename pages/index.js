import Image from 'next/image';
import Link from 'next/link'
import Head from 'next/head';
import Layout from '../components/layout';
import { getSortedPostsData } from '../lib/posts';


export default function Home({allPostsData}) {

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
                    {allPostsData.map((post, i) => {
                        return(<Link key={i} href={`/${post.id}`}> CLick here</Link>)
                    })}
            </Layout>
        </>
    )
}

export async function getStaticProps() {
    const allPostsData = getSortedPostsData();
    return {
      props: {
        allPostsData
      }
    }
  }