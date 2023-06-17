import NavBar from '../components/Navigation/NavBar';
import SearchBar from '../components/Search/SearchBar'
import UserProfile from '../components/Profile/UserProfile';
import Layout from '../components/Layout';

export default function Home() {

    return(
        <Layout>
            <NavBar/>
            <SearchBar/>
            <UserProfile/>
        </Layout>
    )
}
