import { memo, useContext, useRef, useEffect } from 'react';
import { ThemeContext } from '../../pages/_app';
import Input from './Input';
import styles from '../../styles/SearchBar.module.css';


function SearchBar() {
    const {theme, setUserdata} = useContext(ThemeContext);
    const query = useRef();
    const errorMessageRef = useRef();

    const fetchRequest = (username) => {
        fetch(`https://api.github.com/users/${username}`)
            .then(response => response.json())
            .then((data) => {
                if(data?.message){
                    throw new Error(data.message);
                }
                else{
                    setUserdata(data);
                }        
            })   
            .catch(error => {errorMessageRef.current.style.display = 'block'}) 
    }


    const handleClick = () => {
        const username = query.current.state;
        fetchRequest(username)                     
    }

    const handleSubmit = (e) => {
        e.preventDefault();
    }

    const clearErrorMessage = () => {
        errorMessageRef.current.style.display = '';
    }

    useEffect(() => {
        fetchRequest('abelmuro');
    }, [])

    return(
        <form className={theme ? 
            [styles.container, styles.dark].join(' ') : 
            [styles.container, styles.light].join(' ')}
            onSubmit={handleSubmit}>

            <Input ref={query} clearErrorMessage={clearErrorMessage}/>
            <fieldset className={styles.buttonContainer}>
                <input type='button' value='Search' className={styles.submitButton} onClick={handleClick}/>
                <div className={styles.errorMessage} ref={errorMessageRef}>
                    No results
                </div>                
            </fieldset>

        </form>
    )
}

export default memo(SearchBar);