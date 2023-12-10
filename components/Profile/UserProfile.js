import { useContext, useRef,memo } from "react";
import styles from '../../styles/UserProfile.module.css';
import { ThemeContext } from "../../pages/_app";


//now i need to work on the responsiveness of this component

function UserProfile() {
    const {theme, userdata} = useContext(ThemeContext);
    const months = useRef(['Jan', 'Feb', 'Mar', 'Apr', 'May', 'June', 'July', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'])

    const changeStyles = (className) => {
        if(theme)
            return [className, styles.dark].join(' ');
        else
            return [className, styles.light].join(' ')
    }

    const formatDate = (date) => {
        const dateJoined = new Date(date);
        let day = dateJoined.getUTCDate();
        let month = dateJoined.getUTCMonth();
        const year = dateJoined.getUTCFullYear();

        return `Joined ${day} ${months.current[month]} ${year}`
    }

    const formatLocation = (location) => {
        return location.split(',')[0];
    }

    const formatString = (str) => {
        if(str.length <= 16) return str;

        let newStr = '';

        for(let i = 0; i <= 16; i++)
            newStr += str[i];
        
        return newStr + '...';
    }


    const handleLink = (e) => {
        e.preventDefault();
    }


    return userdata ? 
        <section className={changeStyles(styles.container)}>
            <img src={userdata.avatar_url} className={styles.avatar}/>
            <div className={styles.user_metadata}>
                <h1 className={changeStyles(styles.username)}>
                    {userdata.name}
                </h1>   
                <a className={styles.userlink} href={userdata.html_url} target='_blank'>
                    @{userdata.login}
                </a>             
            </div>
            <h2 className={changeStyles(styles.dateJoined)}>
                {formatDate(userdata.created_at)}
            </h2>
            <p className={changeStyles(styles.userbio)}>
                {userdata.bio ? userdata.bio : 'This profile has no bio'}
            </p>
            <div className={changeStyles(styles.userFollowers_metadata)}>
                <h2 className={changeStyles(styles.userFollowers_title)}>
                    Repos
                </h2>
                <h2 className={changeStyles(styles.userFollowers_title)}>
                    Followers
                </h2>
                <h2 className={changeStyles(styles.userFollowers_title)}>
                    Following
                </h2>
                <p className={changeStyles(styles.userFollowers_data)}>
                    {userdata.public_repos}
                </p>
                <p className={changeStyles(styles.userFollowers_data)}>
                    {userdata.followers}
                </p>
                <p className={changeStyles(styles.userFollowers_data)}>
                    {userdata.following}
                </p>
            </div>
            <div className={styles.user_details}>
                <div className={styles.user_detail}>
                    <div className={changeStyles(styles.icon)} style={userdata.location ? {} : {backgroundColor: 'rgba(75, 106, 155, 0.5)'}}></div>
                    <p 
                        className={changeStyles(styles.data)} style={userdata.location ? {} : {color: 'rgba(75, 106, 155, 0.5)', cursor: 'not-allowed'}}> 
                        {userdata.location ? formatLocation(userdata.location) : 'Not Available'}
                    </p>
                </div>
                <div className={styles.user_detail}>
                    <div className={changeStyles(styles.icon)} style={userdata.twitter_username ? {} : {backgroundColor: 'rgba(75, 106, 155, 0.5)'}}></div>
                    <a 
                        className={changeStyles(styles.data)} 
                        style={userdata.twitter_username ? {} : {color: 'rgba(75, 106, 155, 0.5)', cursor: 'not-allowed', textDecoration: 'none'}} 
                        href={userdata.twitter_username ? `https://twitter.com/${userdata.twitter_username}` : ''} 
                        onClick={userdata.twitter_username ? null : handleLink}
                        target='_blank'> 
                            {userdata.twitter_username ? formatString(userdata.twitter_username) : 'Not Available'}
                    </a>
                </div>
                <div className={styles.user_detail}>
                    <div className={changeStyles(styles.icon)} style={userdata.blog ? {} : {backgroundColor: 'rgba(75, 106, 155, 0.5)'}}></div>
                    <a 
                        className={changeStyles(styles.data)} 
                        style={userdata.blog ? {} : {color: 'rgba(75, 106, 155, 0.5)', cursor: 'not-allowed', textDecoration: 'none'}} 
                        href={userdata.blog ? (userdata.blog).includes("http") ? userdata.blog : "http://" +userdata.blog : ''} 
                        onClick={userdata.blog ? null : handleLink}
                        target='_blank'
                        > 
                            {userdata.blog ? formatString(userdata.blog) : 'Not Available'}
                    </a>
                </div>
                <div className={styles.user_detail}>
                    <div className={changeStyles(styles.icon)} style={userdata.company ? {} : {backgroundColor: 'rgba(75, 106, 155, 0.5)'}}></div>
                    <p 
                        className={changeStyles(styles.data)}
                        style={userdata.company ? {} : {color: 'rgba(75, 106, 155, 0.5)', cursor: 'not-allowed'}}
                        > 
                        {userdata.company ? formatString(userdata.company) : 'Not Available'}
                    </p>
                </div>
            </div>
        </section> :
        <></>
    
}

export default memo(UserProfile);
