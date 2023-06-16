import '../common/styles.css';
import { createContext, useState, useEffect} from 'react';

export const ThemeContext = createContext();

export default function MyApp({Component, pageProps}) {
    const [theme, setTheme] = useState(false);      //false = light theme    true = dark theme

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


    return (
        <ThemeContext.Provider value={{theme, setTheme}}>
            <Component {...pageProps}/> 
        </ThemeContext.Provider>
    )
}