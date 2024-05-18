import React from 'react'
import Feed from '@components/feed'
const page = () => {
  return (
    <section className='w-full flex-col flex-center'>
        <h1 className='head_text text-center'>
            Discover & share 
            <br/>
            <span className='orange_gradient'>AI-Powered Prompts</span>
        </h1>
        <p className='text-center mt-3'>Lorem dolor ipsum dolor sit amet consectetur adipisicing elit. Natus ullam pariatur necessitatibus nulla iste aspernatur voluptatibus quas quis delectus fugit, sunt saepe blanditiis reiciendis voluptates voluptatem tempore mollitia aliquid! Corrupti!</p>
        <Feed />
    </section>
  )
}

export default page