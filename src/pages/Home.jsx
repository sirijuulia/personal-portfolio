import React from 'react' 
import HomeBackground from '../components/Home/HomeBackground'
import { useState, useEffect, useRef } from 'react';
import BlogBox from '../components/Blog/BlogBox';
import NoteBox from '../components/Blog/NoteBox';
import NavBox from '../components/Home/NavBox';


// trouble with scrolling - trying to keep background fixed while allowing content to scroll

export default function Home() {

    const [posts, setPosts] = useState(fetchPosts());

    async function fetchPosts () {
    const response = await fetch('src/assets/blog/posts.json');
    const data = await response.json();
    setPosts(data);
    return data;
  }
  
  return (
    
    <>
    <HomeBackground>
      <div className='grid w-4/5 grid-cols-4 gap-6 overflow-y-auto scrollbar-hidden'>
      <div className='box-border inline col-start-3 col-span-2 p-10 mt-20'>
        <h2  className={`text-4xl comfortaa font-extrabold`}>Looking for the right tools to boost your impact? I am here to help you.</h2>
      </div>
      <div className='box-border inline col-start-1 col-span-4 p-5'>
        <h2 className='text-4xl comfortaa font-extrabold'>Navigation</h2>
        <div className='grid w-full  gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 mt-5 '>
        <NavBox title="about" image="" link="/about"/>
        <NavBox title="blog" image="" link="/blog"/>
        <NavBox title="software" image="" link="/software-portfolio"/>
        <NavBox title="photos" image="" link="/photo-portfolio"/>
        <NavBox title="contact" image="" link="/contact"/>
        </div>
      </div>
      <div className='box-border inline col-start-1 col-span-4 p-5'>
      <h2 className='text-4xl comfortaa font-extrabold'>Blog</h2>
      <div className='grid w-full gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 overflow-y-auto scrollbar-hidden mt-5'>
      {posts.length > 0 &&
            posts.map((post, index) => {
              if (index < 4) {
              if (post.type ==="note") {
                return <NoteBox key={index} date={post.date} content={post.content}/> 
              } else if (post.type === "post") {
                return <BlogBox key={index} image={post.image} title={post.title} date={post.date} content={post.content}/> 
              }}
            })}
            </div>
      </div>
      {/* <div className='box-border inline col-start-1 col-span-2 p-10'>
        <h2 className='text-4xl comfortaa font-extrabold'>Currently inspired by</h2>
      </div> */}
      </div>
      </HomeBackground></>
  )
}
