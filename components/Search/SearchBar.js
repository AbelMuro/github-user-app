import {memo} from 'react';
import {useContext} from 'react';
import styles from '../../styles/SearchBar.module.css';
import { ThemeContext } from '../../pages/_app';

function SearchBar() {
    const {theme} = useContext(ThemeContext);

    return(
        <form className={theme ? [styles.container, styles.dark].join(' ') : 
                                [styles.container, styles.light].join(' ')}>
                
        </form>
    )
}

export default memo(SearchBar);