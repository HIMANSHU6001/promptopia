'use client'
import { useState, useEffect } from 'react'
import PromptCard from './PromptCard'
import Fuse from 'fuse.js'

const PromptCardList = ({ data, handleTagClick }) => {
  return (
    <div className='mt-16 prompt_layout'>
      {
        data.map(post => {
          return (
            <PromptCard
              key={post.id}
              post={post}
              handleTagClick={handleTagClick}
            />
          )
        })
      }
    </div>
  )
}

const Feed = () => {

  const [searchText, setSearchText] = useState('');
  const [posts, setPosts] = useState([])
  const [orignalPosts, setOrignalPosts] = useState([])
  

  useEffect(() => {
    const fetchPosts = async () => {
      const response = await fetch('/api/prompt')
      const data = await response.json();
      setPosts(data)
      setOrignalPosts(data)
    }
    fetchPosts()
  }, [])

  const fuseOptions = {
    isCaseSensitive: false,
    shouldSort: true,
    findAllMatches: false,
    minMatchCharLength: 2,
    keys: [
      "prompt",
      "tag"
    ]
  };

  const fuse = new Fuse(orignalPosts, fuseOptions);

  const handleSearchChange = (e) => {
    setSearchText(e.target.value);
    if (searchText.length < 3 ){
      setPosts(orignalPosts)
    }
    else {
      let searchResult = fuse.search(searchText);
      let newPosts = []
      for (let index = 0; index < searchResult.length; index++) {
        const post = searchResult[index].item;
        newPosts.push(post)
      }
      setPosts(newPosts)
    }
  }

  const handleTagClick = (tag) => {
    let newPosts = [];
    for (let index = 0; index < orignalPosts.length; index++) {
      const post = orignalPosts[index];
      if (post.tag === tag){
        newPosts.push(post)
      }
    }
    setPosts(newPosts)
    setSearchText(tag)
  }

  return (
    <section className='feed'>
      <form className='relative w-full flex-center'>
        <input
          type="text"
          placeholder='Search for a tag or a keyword'
          value={searchText}
          onChange={(e) => handleSearchChange(e)}
          onSubmit={(e) => e.preventDefault()}
          required
          className='search_input peer'
        />
      </form>
      <PromptCardList
        data={posts}
        handleTagClick={handleTagClick}
      />
    </section>
  )
}

export default Feed