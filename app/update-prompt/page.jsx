'use client'
import React, { useState, useContext, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import Form from '@components/Form'
import userContext from '@utils/userContext'


const UpdatePrompt = ({params}) => {
  const { user, setUser } = useContext(userContext)
  const router = useRouter()
  const {id: promptId} = router.query
  const [submitting, setSubmitting] = useState(false);
  const [post, setPost] = useState({
    prompt: "",
    tag: ""
  })

  useEffect(() => {
    const getPromptDetails = async () => {
      const response = await fetch(`/api/prompt/${promptId}`, {
        method: "GET"
      })
      const data = await response.json();
      setPost({
        prompt: data.prompt,
        tag: data.tag
      });
    }
    if (promptId) getPromptDetails();
  },[promptId])


  const updatePrompt = async (e) => {
    e.preventDefault();
    console.log("Updating prompt");
    setSubmitting(true);
    try {
      const response = await fetch(`/api/prompt/${promptId}`, {
        method: "PATCH",
        body: JSON.stringify({
          prompt: post.prompt,
          tag: post.tag
        })
      })
      if (response.ok) {
        console.log("Prompt updated frontends");
        router.push('/')
      }
    } catch (error) {
      console.log(error);
    }
    setSubmitting(false);
  }


  return (
    <Suspense fallback={<div>Loading...</div>}>
    <Form
      type="Update"
      post={post}
      setPost={setPost}
      submitting={submitting}
      handleSubmit={updatePrompt}
    />
    </Suspense>
  )
}

export default UpdatePrompt;