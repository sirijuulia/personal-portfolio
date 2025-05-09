import React from 'react'
import { NavLink } from 'react-router'

export default function NavBarLink({children, link}) {
  return (
    <NavLink to={link} className="text-gray-600 hover:text-amber-600 active:text-amber-700 montserrat">{children}</NavLink>
  )
}
