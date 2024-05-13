import React from 'react'
import { useLoaderData } from 'react-router-dom'
const Github = () => {
    const data = useLoaderData();
  return (
    <div>
        <h1> Github followers : {data.followers} </h1>
        <img src={data.avatar_url} alt="github profile" />
    </div>
  )
}

export default Github

const fetchGithubData = async () => {
    const response = await fetch('https://api.github.com/users/SanskarShubham')
    return response.json();
}

export {fetchGithubData}