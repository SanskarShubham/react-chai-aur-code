import { useState ,useEffect} from 'react'
import Card from './components/Card'
import ThemeBtn from './components/ThemeBtn'
import { ThemeProvider } from './context/ThemeContext'

function App() {
    const [themeMode, setThemeMode] = useState("light");
    const lightMode = ()=>{
      setThemeMode("light");
    }

    const darkMode =() =>{
      setThemeMode("dark");
    }
    useEffect(() => {
       document.querySelector('html').classList.remove("dark","light") ;
       document.querySelector('html').classList.add(themeMode) ;
    
      
    }, [themeMode])
    
  return (
    <ThemeProvider value={{themeMode,lightMode,darkMode}}>
     
      <div className="flex flex-wrap min-h-screen items-center">
          <div className="w-full">
              <div className="w-full max-w-sm mx-auto flex justify-end mb-4">
                  <ThemeBtn />
              </div>

              <div className="w-full max-w-sm mx-auto">
                  <Card />
              </div>
          </div>
      </div>
    
      </ThemeProvider>
  )
}

export default App
