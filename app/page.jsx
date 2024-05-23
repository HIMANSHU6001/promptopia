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
        <p className='text-center mt-3'>Promptopia is an open-source AI prompting tool for modern world to discover, create and share creative prompts</p>
        <Feed />
    </section>
  )
}

export default page