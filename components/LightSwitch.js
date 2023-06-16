import {useEffect, useContext} from 'react';
import {ThemeContext} from '../pages/_app';
import styles from '../styles/LightSwitch.module.css';


export default function LightSwitch() {
    const {theme, setTheme} = useContext(ThemeContext);


    const handleClick = () => {
        setTheme(!theme);
    }


    return(
        <section className={styles.container}>
            <h1 className={styles.currentTheme}>
                {theme ? 'LIGHT' : 'DARK'}
            </h1>
            <div className={theme ? 
                [styles.currentThemeIcon, styles.light].join(' ') : 
                [styles.currentThemeIcon, styles.dark].join(' ')} 
                onClick={handleClick}>

            </div>
        </section>
    )
}