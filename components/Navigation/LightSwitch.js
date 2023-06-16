import {useContext} from 'react';
import {ThemeContext} from '../../pages/_app';
import styles from '../../styles/LightSwitch.module.css';


export default function LightSwitch() {
    const {theme, setTheme} = useContext(ThemeContext);


    const handleClick = () => {
        setTheme(!theme);
    }


    return(
        <section className={styles.container} onClick={handleClick}>
            <h1 className={theme ? 
                    [styles.currentTheme, styles.dark].join(' ') :
                    [styles.currentTheme, styles.light].join(' ')
                    }>
                {theme ? 'LIGHT' : 'DARK'}
            </h1>
            <div className={theme ? 
                    [styles.currentThemeIcon, styles.dark].join(' ') : 
                    [styles.currentThemeIcon, styles.light].join(' ')} >
            </div>
        </section>
    )
}