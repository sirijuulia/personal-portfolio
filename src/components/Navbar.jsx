import React from 'react'
import NavBarLink from './NavBarLink'
import { NavLink } from 'react-router'


export default function Navbar() {
  const pathname = window.location.pathname
  return (
    <div className='w-screen  h-22 grid align-middle grid-cols-2 px-10 border-gray-400 fixed top-0 z-10'>
      <div className='flex justify-baseline items-center'>
      <NavBarLink link="/">
        <h1 className='text-4xl font-extrabold text-orange-400 hover:text-amber-600 active:text-orange-800 comfortaa'>Siri Juulia</h1>
        </NavBarLink>
      </div>
<div className='flex justify-self-end items-center block gap-10'>
        <NavBarLink link="/about">About</NavBarLink>
        <NavBarLink link="/blog">Blog</NavBarLink>
        <NavBarLink link="/software-portfolio">Software</NavBarLink>
        <NavBarLink link="/photo-portfolio">Photos</NavBarLink>
        <NavBarLink link="/contact">Contact</NavBarLink>
    </div>
    </div>
  )
}
