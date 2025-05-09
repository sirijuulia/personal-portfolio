import React from 'react'
import NavBarLink from './NavBarLink'
import { NavLink } from 'react-router'


export default function Navbar() {
  return (
    <div className='w-screen bg-white h-22 grid align-middle grid-cols-4 px-10 border-b-2 border-gray-400 absolute top-0 z-10'>
      <div className='flex justify-baseline items-center'>
      <NavBarLink link="/">
        <h1 className='text-4xl font-extrabold text-amber-600 hover:text-amber-700 active:text-orange-800 comfortaa'>Siri Juulia</h1>
        </NavBarLink>
      </div>
      <div className='flex justify-items-stretch items-center block col-span-2 justify-self-center gap-10'>
          <NavBarLink link="/about">About</NavBarLink>
          <NavBarLink link="/blog">Blog</NavBarLink>
          <NavBarLink link="/software-portfolio">Software</NavBarLink>
          <NavBarLink link="/photo-portfolio">Photos</NavBarLink>
      </div>
      <div className='flex justify-end items-center'>
        <button className='bg-amber-600 hover:bg-amber-700 active:bg-orange-800 text-white rounded cursor-pointer montserrat h-auto'><NavLink to="/contact" className="px-10 py-2 block rounded">Contact</NavLink></button>
      </div>
    </div>
  )
}
