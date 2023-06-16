import {memo, useContext} from 'react';
import LightSwitch from './LightSwitch';
import styles from '../../styles/NavBar.module.css';
import {ThemeContext} from '../../pages/_app';

function NavBar () {
    const {theme} = useContext(ThemeContext);

    return (
        <nav className={styles.container}>
            <h1 className={theme ? [styles.logo, styles.dark].join(' ') : 
                                [styles.logo, styles.light].join(' ')
                            }>
                devfinder
            </h1>
            <LightSwitch/>
        </nav>
    )
}

export default memo(NavBar);