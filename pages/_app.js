import '../common/styles.css';
import { createContext, useState, useEffect} from 'react';

export const ThemeContext = createContext();

export default function MyApp({Component, pageProps}) {
    const [theme, setTheme] = useState(false);              //false = light theme    true = dark theme
    const [userdata, setUserdata] = useState(null);

    useEffect(() => {
        const body = document.querySelector('body');

        if(theme){
            body.classList.remove('light');
            body.classList.add('dark');
        }
            
        else{
            body.classList.remove('dark');
            body.classList.add('light')
        }
            
    }, [theme])

    useEffect(() => {
        setTheme(window.matchMedia('(prefered-color-scheme: dark)').matches);
    }, [])

    const value = {
        theme, setTheme, 
        userdata, setUserdata
    }

    return (
        <ThemeContext.Provider value={value}>
            <Component {...pageProps}/> 
        </ThemeContext.Provider>
    )
}