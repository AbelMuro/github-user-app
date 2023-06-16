import '../common/styles.css';
import { createContext, useState } from 'react';

export const ThemeContext = createContext();

export default function MyApp({Component, pageProps}) {
    const [theme, setTheme] = useState(false);      //false = light theme    true = dark theme

    return (
        <ThemeContext.Provider value={{theme, setTheme}}>
            <Component {...pageProps}/> 
        </ThemeContext.Provider>
    )
}