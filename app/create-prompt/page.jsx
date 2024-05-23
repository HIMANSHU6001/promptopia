'use client'
import React, { useState, useContext } from 'react'
import { useRouter } from 'next/navigation'
import Form from '@components/Form'
import userContext from '@utils/userContext'

const CreatePrompt = () => {
    const { user, setUser } = useContext(userContext)
    const router = useRouter()
    const [submitting, setSubmitting] = useState(false);
    const [post, setPost] = useState({
        prompt: '',
        tag: ''
    })

    const createPrompt = async (e) => {
        e.preventDefault();
        console.log("Creating prompt");
        setSubmitting(true);
        try {
            const response = await fetch('/api/prompt/new', {
                method: "POST",
                body: JSON.stringify({
                    prompt: post.prompt,
                    user: user, 
                    tag: post.tag
                })
            })
            if (response.ok) { 
                console.log("Prompt created frontends");
                router.push('/')
            }
        } catch (error) {
            console.log(error);
        }
        setSubmitting(false);
    }

    return (
        <Form 
        type="Create"
        post={post}
        setPost={setPost}
        submitting={submitting}
        handleSubmit={createPrompt}
        />
    )
}

export default CreatePrompt