import React from 'react'
import { useState } from 'react'
import rockBackground from "../assets/rockBackground.jpg"
import BlogBox from '../components/Blog/BlogBox';
import BlogPage from '../components/Blog/BlogPage';
import NoteBox from '../components/Blog/NoteBox';
import NotePopup from '../components/Blog/NotePopup';

export default function Blog() {
  const [posts, setPosts] = useState(fetchPosts());
  // const [images, setImages] = useState(fetchImages());

  async function fetchPosts () {
    const response = await fetch('src/assets/blog/posts.json');
    const data = await response.json();
    setPosts(data);
    return data;
  }

  async function fetchImages () {
    const response = await fetch('https://api.example.com/images');
    const data = await response.json();
    return data;
  }


  return (
    <div className='w-full h-full flex flex-col items-center top-0 overflow-hidden fixed  bg-cover bg-center pt-22 ' style={{backgroundImage: `url(${rockBackground})`, backgroundColor: "rgba(0,0,0,0.6)", backgroundBlendMode: "overlay", backgroundAttachment: "fixed"}}>
    <h1 className='text-4xl font-bold text-center comfortaa text-amber-600 m-10'>Blog</h1>
    <div className='grid w-4/5  gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 overflow-y-auto scrollbar-hidden p-10'>
    {posts.length > 0 &&
    posts.map((post, index) => {
      if (post.type ==="note") {
        return <NoteBox key={index} date={post.date} content={post.content}/> 
      } else if (post.type === "post") {
        return <BlogBox key={index} image={post.image} title={post.title} date={post.date} content={post.content}/> 
      }


    })}
    </div>
    </div>
  )
}


  // {
  //     posts.length > 0 && 
  //     posts.map((post, index) => {
  //       if (post.type === "note") { 
  //         return <div key={index} className='bg-amber-700 box-border inline col-span-1 p-10'>
  //         <h2 className='text-2xl font-bold'>{post.title}</h2>
  //         <p>{post.content}</p>
  //         <img alt={post.title} className='w-full h-auto' />
  //       </div>
  //       }
  //       else if (post.type === "blog") {
  //         return <div key={index} className='bg-amber-700 box-border inline col-span-1 p-10'>
  //         <h2 className='text-2xl font-bold'>{post.title}</h2>
  //         <p>{post.content}</p>
  //         <img alt={post.title} className='w-full h-auto' />
  //       }
  //       })
  //     ))

  //   }
