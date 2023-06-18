import {memo} from 'react';
import styles from '../styles/Layout.module.css';

//this should be a different comment
function Layout({children}) {
    return(
        <main className={styles.container}>
            {children}
        </main>
    )
}

export default memo(Layout);
