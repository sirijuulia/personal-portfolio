import React from 'react'

export default function NoteBox({date, content}) {
  return (
    <div className='bg-amber-700 box-border col-span-1 p-7 border-2 border-white aspect-3/2'> 
        <div className='h-full w-full overflow-hidden'>
          <p>{date}</p>
          <p>{content}</p>
          </div>
    </div>
  )
}
