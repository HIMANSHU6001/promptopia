'use client'
import { useState, useEffect, useContext } from 'react'
import userContext from '@utils/userContext'
import { usePathname, useRouter } from 'next/navigation'
import Profile from '@components/Profile'

const profile = () => {
    const { push } = useRouter();
    const { user, setUser } = useContext(userContext); ``
    const [posts, setPosts] = useState([])

    useEffect(() => {
        const fetchPosts = async () => {
            const response = await fetch(`/api/user/getuserprompts`,
                {
                    method: 'POST',
                    body: JSON.stringify({ userEmail: user?.email })
                }
            )
            const data = await response.json();
            setPosts(data);
        }
        if (user) fetchPosts()
    }, [user])

    const handleEdit = async (promptId) => {
        push(`/update-prompt?id=${promptId}`)
    }
    
    const handleDelete = async (promptId) => {
        const hasConfirmed = confirm("Are you sure you want to delete this prompt?");
        if (!hasConfirmed) return;
        const respone = fetch(`/api/prompt/${promptId}`,
            {
                method: 'DELETE'
            }
        )
        let newPosts = posts.filter(post => post.id !== promptId)
        setPosts(newPosts)
    }

    return (
        <Profile
            name="My"
            desc="This is my profile"
            data={posts}
            handleEdit={handleEdit}
            handleDelete={handleDelete}
        />
    )
}

export default profile