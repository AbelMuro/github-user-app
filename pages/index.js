import NavBar from '../components/Navigation/NavBar';
import SearchBar from '../components/Search/SearchBar'
import Layout from '../components/Layout';

export default function Home() {

    return(
        <Layout>
            <NavBar/>
            <SearchBar/>
        </Layout>
    )
}
