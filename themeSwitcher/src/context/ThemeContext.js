import react,{createContext, useContext} from 'react'


export const themeContext = createContext({
    themeMode:"dark",
    lightMode: function lightMode(){},
    darkMode: function darkMode(){}
})

export const ThemeProvider = themeContext.Provider

export default function useTheme() {
    return   useContext(themeContext);
}