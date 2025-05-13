import React from 'react'
import rockBackground from "../assets/rockBackground.jpg"

export default function ContentWrapper({ children }) {
  return (
    <div className='pt-25 page-content'>{children}</div>
  )
}
