import React, { useContext } from 'react'
import UserContext from '../context/UserContext'


function Profile() {
    const {user} = useContext(UserContext);
  return (
    <div>
        
        Hii, {user && user.username}</div>
  )
}

export default Profile