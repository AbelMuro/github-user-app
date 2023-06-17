import { useContext, useRef,memo } from "react";
import styles from '../../styles/UserProfile.module.css';
import { ThemeContext } from "../../pages/_app";

function UserProfile() {
    const {theme, userdata} = useContext(ThemeContext);
    const months = useRef(['Jan', 'Feb', 'Mar', 'Apr', 'May', 'June', 'July', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'])
    console.log(userdata);

    const changeStyles = (className) => {
        if(theme)
            return [className, styles.dark].join(' ');
        else
            return [className, styles.light].join(' ')
    }

    const formatDate = (date) => {
        const dateJoined = new Date(date);
        let day = dateJoined.getDate();
        let month = dateJoined.getMonth();
        const year = dateJoined.getFullYear();

        if(day.length == 1)
            day = '0' + day;

        return `Joined ${day} ${months.current[month]} ${year}`
    }

    const formatLocation = (location) => {
        return location.split(',')[0];
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
                {userdata.bio}
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
                    <div className={changeStyles(styles.icon)}></div>
                    <p className={styles.data}> 
                        {userdata.location ? formatLocation(userdata.location) : 'Not Available'}
                    </p>
                </div>
                <div className={styles.user_detail}>
                    <div className={changeStyles(styles.icon)}></div>
                    <p className={styles.data}> 
                        {userdata.twitter_username ? userdata.twitter_username : 'Not Available'}
                    </p>
                </div>
                <div className={styles.user_detail}>
                    <div className={changeStyles(styles.icon)}></div>
                    <p className={styles.data}> 
                        {userdata.blog ? userdata.blog : 'Not Available'}
                    </p>
                </div>
                <div className={styles.user_detail}>
                    <div className={changeStyles(styles.icon)}></div>
                    <p className={styles.data}> 
                        {userdata.company ? userdata.company : 'Not Available'}
                    </p>
                </div>
            </div>
        </section> :
        <></>
    
}

export default memo(UserProfile);

