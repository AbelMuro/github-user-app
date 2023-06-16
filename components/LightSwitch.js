import {useEffect, useContext} from 'react';
import {ThemeContext} from '../pages/_app';
import styles from '../styles/LightSwitch.module.css';

//now i need to change the icon image everytime theme is changed

export default function LightSwitch() {
    const {theme, setTheme} = useContext(ThemeContext);


    const handleClick = () => {
        setTheme(!theme);
    }

    useEffect(() => {

    }, [])

    return(
        <section className={styles.container}>
            <h1 className={styles.currentTheme}>
                {theme ? 'LIGHT' : 'DARK'}
            </h1>
            <div className={styles.currentThemeIcon} onClick={handleClick}></div>
        </section>
    )
}