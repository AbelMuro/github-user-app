import {memo} from 'react';
import styles from '../styles/Layout.module.css';
//this is for the side branch

function Layout({children}) {
    return(
        <main className={styles.container}>
            {children}
        </main>
    )
}

export default memo(Layout);
