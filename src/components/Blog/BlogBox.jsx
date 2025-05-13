import React from 'react'

export default function BlogBox({image, title, date, content}) {
  return (
    <div className='bg-amber-700 box-border col-span-1 border-2 border-white aspect-3/2 pb-7'>
          <img src={image} alt={title} className='w-full h-1/2 object-cover' />
          <div className='px-7 pt-1  box-border h-1/2 w-full'>
          <p className='text-center'>{date}</p>
          <h2 className='text-2xl font-bold text-center'>{title}</h2>
          {/* {content.split("\r\n").map((line, index) => <p key={index}>{line}</p>)} */}
          </div>
           </div>
  )
}
