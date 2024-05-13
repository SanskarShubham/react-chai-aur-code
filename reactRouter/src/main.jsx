import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import Layout from './Layout.jsx'
import Home from './coponents/Home/Home.jsx'
import About from './coponents/About/About.jsx'
import Contact from './coponents/Contact/Contact.jsx'
import User from './coponents/User/User.jsx'
import Github, { fetchGithubData } from './coponents/Github/Github.jsx'
// const router = createBrowserRouter([
//   {
//     path: '/',
//     element: <Layout />, 
//     children: [
//       {
//         path: '',
//         element: <Home/> 
//       },
//       {
//         path: 'about',
//         element: <About/>
//       }
//     ]
//   }
// ])

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route path='' element={<Home />} />
      <Route path='/about' element={<About />} />
      <Route path='/contact' element={<Contact />} />
      <Route path='/user/:userId' element={<User />} />
      <Route
       path='/github'
       element={<Github />}
       loader={fetchGithubData} />
    </Route>
  )
)
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
