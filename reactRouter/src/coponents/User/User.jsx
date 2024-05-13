import React from 'react'
import { useParams } from 'react-router-dom'
const User = () => {
    const {userId} = useParams();
  return (
    <div>Params: {userId}</div>
  )
}

export default User