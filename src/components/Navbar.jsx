import React from 'react'
import NavBarLink from './NavBarLink'
import { NavLink } from 'react-router'


export default function Navbar() {
  return (
    <div className='w-screen bg-white h-20 grid align-middle grid-cols-3 px-10 border-b-2 border-gray-400 absolute top-0 z-10'>
      <div className='flex justify-baseline items-center'>
      <NavBarLink link="/">
        <h1 className='text-3xl font-extrabold text-burntorange text-burntorange-hover comfortaa'>Siri Juulia</h1>
        </NavBarLink>
      </div>
      <div className='flex justify-center items-center'>
          <NavBarLink link="/about">About</NavBarLink>
          <NavBarLink link="/blog">Blog</NavBarLink>
          <NavBarLink link="/software-portfolio">Software Portfolio</NavBarLink>
          <NavBarLink link="/photo-portfolio">Photo Portfolio</NavBarLink>
      </div>
      <div className='flex justify-end items-center'>
        <button className='bg-burntorange bg-burntorange-hover  text-white rounded cursor-pointer montserrat h-auto'><NavLink to="/contact" className="px-10 py-2 block rounded">Contact</NavLink></button>
      </div>
    </div>
  )
}
