export default function Random(props) {
    console.log(props);

    return (
        <div>
            it works
        </div>
    )
}


export async function getStaticPaths() {
    return { paths: [{params : {id: ['a', 'b', 'c']}}],                        
             fallback: false
    }
}

export async function getStaticProps(context) {
    return { props: { title: 'My Title', content: '...' } }
}
