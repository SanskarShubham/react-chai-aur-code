import React, { useContext } from 'react'
import { useState } from 'react'
import UserContext from '../context/UserContext';
 

function Login() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const {setUser} =    useContext(UserContext);
    const handleLogin = () => {
        setUser({username, password})
    }
  return (
        
    <>
    <h2>Login</h2>
    <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} placeholder="Username" />
    <input type="text" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
    <button onClick={() => handleLogin()}>Login</button>
    </>
  )
}

export default Login