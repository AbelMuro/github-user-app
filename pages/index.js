import NavBar from '../components/Navigation/NavBar';
import SearchBar from '../components/Search/SearchBar'
import UserProfile from '../components/Profile/UserProfile';
import Layout from '../components/Layout';

export default function Home({data}) {

    return(
        <Layout>
            <NavBar/>
            <SearchBar initialData={data}/>
            <UserProfile/>
        </Layout>
    )
}

export async function getStaticProps() {
    const response = await fetch('https://api.github.com/users/abelmuro');
    const data = await response.json();
    
    return{
        props : {data : data}
    }

}