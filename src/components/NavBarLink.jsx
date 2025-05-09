import React from 'react'
import { NavLink } from 'react-router'

export default function NavBarLink({children, link}) {
  return (
    <NavLink to={link} className="px-10 text-gray-600 hover:text-orange-400 active:text-orange-700 montserrat">{children}</NavLink>
  )
}
