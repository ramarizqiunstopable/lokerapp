import { Navbar } from 'flowbite-react'
import React from 'react'
import { Link } from 'react-router-dom'

const Navigation = () => {
  return (
    <Navbar
  fluid={false}
  rounded={true}
>
<div className='container flex flex-wrap items-center justify-between py-10 mx-auto '>
<Navbar.Brand href="https://flowbite.com/">
    
    <span className="self-center text-xl font-semibold whitespace-nowrap dark:text-white">
      Final Project React JS
    </span>
  </Navbar.Brand>
  <Navbar.Toggle />
  <Navbar.Collapse>
  
  <li>
    <Link  to="/" className="block py-2 pl-3 pr-4 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-white" aria-current="page">Home</Link>
  </li>
  

  </Navbar.Collapse>
</div>


  
</Navbar>
  )
}

export default Navigation
