import {memo} from 'react';
import LightSwitch from './LightSwitch';
import styles from '../styles/NavBar.module.css';

function NavBar () {
    return (
        <nav className={styles.container}>
            <h1 className={styles.logo}>
                devfinder
            </h1>
            <LightSwitch/>
        </nav>
    )
}

export default memo(NavBar);