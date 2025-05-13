import React from 'react'

export default function NavBox({title, image, link}) {
  return (
    <a href={link}><div className='bg-amber-700/80 box-border rounded-lg col-span-1 p-7 border-2 border-white aspect-2/1 flex justify-center items-center text-4xl'>{title}</div></a>
  )
}
