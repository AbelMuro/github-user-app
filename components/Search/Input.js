import {useState, useContext, forwardRef, useImperativeHandle} from 'react';
import { ThemeContext } from '../../pages/_app';
import useMediaQuery from '../../hooks/useMediaQuery';
import styles from '../../styles/Input.module.css'

const Input = forwardRef(({clearErrorMessage}, ref) => {
    const [query, setQuery] = useState('');
    const {theme} = useContext(ThemeContext);
    const mobile = useMediaQuery('(max-width: 475px)');

    const handleChange = (e) => {
        clearErrorMessage();
        setQuery(e.target.value);
    }

    useImperativeHandle(ref, () => ({
        get state() {
            return query;
        }
    }))

    return(
        <fieldset className={styles.container}>
            <input 
                type='text' 
                value={query} 
                onChange={handleChange}
                placeholder={mobile ? 'Search user' : 'Search Github username...' } 
                className={theme ? 
                    [styles.input, styles.dark].join(' ') : 
                    [styles.input, styles.light].join(' ')}
                />   
            <img src={'/Icons/icon-search.svg'} className={styles.searchIcon}/>         
        </fieldset>

    )

})


export default Input

