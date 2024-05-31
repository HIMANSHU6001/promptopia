'use client'
import React, { useState, useEffect } from 'react'
import Form from '@components/Form'

const UpdatePrompt = () => {
  const [promptId, setPromptId] = useState(null);
  const [submitting, setSubmitting] = useState(false);
  const [post, setPost] = useState({
    prompt: "",
    tag: ""
  })

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const params = new URLSearchParams(window.location.search);
      const id = params.get('id');
      if (id) {
        setPromptId(id);
      }
    }
  }, []);

  useEffect(() => {
    console.log("Fetching prompt details", promptId);
    if (promptId) {
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
      getPromptDetails();
    }
  }, [promptId]);


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
    <Form
      type="Update"
      post={post}
      setPost={setPost}
      submitting={submitting}
      handleSubmit={updatePrompt}
    />
  )
}

export default UpdatePrompt;