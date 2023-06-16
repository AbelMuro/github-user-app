import {memo, useContext, useRef} from 'react';
import { ThemeContext } from '../../pages/_app';
import Input from './Input';
import styles from '../../styles/SearchBar.module.css';


//i will need to make a fetch request to the github API in a useEffect
function SearchBar() {
    const {theme} = useContext(ThemeContext);
    const query = useRef();

    return(
        <form className={theme ? 
            [styles.container, styles.dark].join(' ') : 
            [styles.container, styles.light].join(' ')}>
                <Input ref={query}/>
            <fieldset className={styles.buttonContainer}>
                <input type='submit' value='Search' className={styles.submitButton}/>
                <div className={styles.errorMessage}>
                    No results
                </div>                
            </fieldset>

        </form>
    )
}

export default memo(SearchBar);