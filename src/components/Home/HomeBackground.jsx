import React from 'react'
import sunsetBackground from '../../assets/sunsetBackground.jpg'
import highlandsBackground from '../../assets/highlandsBackground.jpg'
import auroraBackground from '../../assets/auroraBackground.jpg'
import winterBackground from '../../assets/winterBackground.jpg'



export default function HomeBackground({children}) {
    const randomNumber = Math.floor(Math.random() * 3);
    const backgroundImages = [
        `url(${sunsetBackground})`,
        `url(${highlandsBackground})`,
        `url(${winterBackground})`,
    ];
  return (
    <div style={{backgroundImage: `${backgroundImages[1]}`, backgroundColor: "rgba(0,0,0,0.2)", backgroundBlendMode: "overlay", backgroundAttachment: "fixed"}} className={`h-full w-full box-border flex flex-col items-center pt-20 pb-10 top-0 overflow-hidden fixed  bg-cover bg-center`}>{children}</div>
  )
}
