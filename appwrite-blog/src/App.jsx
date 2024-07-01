import './App.css'
import { useState,useEffect } from 'react'
import {useDispatch} from 'react-redux'
import { login, logout } from './store/authSlice'
import auth from './AppWrite/Auth'
import Footer from './components/Footer'
import Header from './components/Header'
function App() {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    auth.getCurrentUser().then((userData) => {
        if (userData) {
            useDispatch(login(userData))
        }else{
          useDispatch(logout())
        }
    })
    .finally(() => setLoading(false))
  })
  
  return !loading ? (
    <div className='min-h-screen flex flex-wrap content-between bg-gray-400'>
      <div className='w-full block'>
        <Header />
        <main>
        {/* TODO:  <Outlet /> */}
        </main>
        <Footer />
      </div>
    </div>
  ) : null
}

export default App

// 6:53 min
