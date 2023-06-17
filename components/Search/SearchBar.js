import { memo, useContext, useRef } from 'react';
import { ThemeContext } from '../../pages/_app';
import Input from './Input';
import styles from '../../styles/SearchBar.module.css';


function SearchBar() {
    const {theme, setUserdata} = useContext(ThemeContext);
    const query = useRef();

   const handleClick = () => {
        const username = query.current.state;

        fetch(`https://api.github.com/users/${username}`)
            .then(response => response.json())
            .then(data => setUserdata(data?.message ? null : data))
   }

    return(
        <form className={theme ? 
            [styles.container, styles.dark].join(' ') : 
            [styles.container, styles.light].join(' ')}>
                <Input ref={query}/>
            <fieldset className={styles.buttonContainer}>
                <input type='button' value='Search' className={styles.submitButton} onClick={handleClick}/>
                <div className={styles.errorMessage}>
                    No results
                </div>                
            </fieldset>

        </form>
    )
}

export default memo(SearchBar);