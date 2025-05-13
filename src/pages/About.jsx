import React from 'react'
import treeBackground from "../assets/treeBackground.jpg"
import profileImage from "../assets/profileImage.jpg"

export default function About() {
  return (
    <div className='w-full h-full grid grid-cols-5 items-center justify-middle top-0 overflow-hidden scrollbar-hidden fixed bg-cover bg-center pt-15 bp-5' style={{backgroundImage: `url(${treeBackground})`, backgroundColor: "rgba(0,0,0,0.6)", backgroundBlendMode: "overlay", backgroundAttachment: "fixed"}}>
    <div className='col-start-1 col-span-2 aspect-1/1 rounded-full overflow-hidden shadow-lg shadow-gray-500/50'><img src={profileImage} alt="" /></div>
    <div className='col-start-3 col-span-3 w-4/5 h-full mt-10 p-9 flex flex-col gap-4 overflow-scroll scrollbar-hidden justify-self-center'>
    <div className='w-full bg-gray-600/80 text-white montserrat box-border p-8 rounded-lg text-justify'>
        <p>Hi, I'm Siri. I am a software developer, a facilitator and a community engagement professional, and an occasional photographer.</p>
        <br/>
        <p>I have spent my career looking for tools to make it more effective for people like you to achieve your goals.</p>
      </div>
      <div className='w-full bg-gray-600/80 text-white montserrat box-border p-8 rounded-lg text-justify'>
      <p>My background is broad which allows me to look beyond the immediate problem and understand what is blocking you - from technology to collaboration and storytelling - and how we can navigate our way through.</p>
      <br/>
      <p>I draw from evidence and scholarship in feminist leadership, participation, agile project management and communications to build impactful, ethical and useable products and excellent teams.</p></div>
      <div className='w-2/5 bg-green-900/70 text-white montserrat box-border p-6 rounded-lg self-end text-right'><p>All that you touch</p><p>You Change.</p><p>All that you Change</p><p>Changes you.</p><p>-Octavia E. Butler</p></div>
    </div>
    {/* <div className='col-start-1 col-span-5 bg-white'>
      <div className='w-full bg-gray-600/80 text-white montserrat box-border p-8 rounded-lg text-justify'>
        <p>Hi, I'm Siri. I am a software developer, a facilitator and a community engagement professional, and an occasional photographer.</p>
        <br/>
        <p>I have spent my career looking for tools to make it more effective for people like you to achieve your goals.</p>
      </div>
      <div className='w-full bg-gray-600/80 text-white montserrat box-border p-8 rounded-lg text-justify'>
      <p>My background is broad which allows me to look beyond the immediate problem and understand what is blocking you - from technology to collaboration and storytelling - and how we can navigate our way through.</p>
      <br/>
      <p>I draw from evidence and scholarship in feminist leadership, participation, agile project management and communications to build impactful, ethical and useable products and excellent teams.</p></div>
      <div className='w-full bg-gray-600/80 text-white montserrat box-border p-8 rounded-lg text-justify'><p>All that you touch</p><p>You Change.</p><p>All that you Change</p><p>Changes you.</p><p>-Octavia E. Butler</p></div>
    </div> */}
</div>
  )
}
