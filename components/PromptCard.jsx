'use client'
import { useState, useContext } from 'react'
import Image from 'next/image'
import userContext from '@utils/userContext'
import { usePathname, useRouter } from 'next/navigation'


const PromptCard = ({ post, handleTagClick, handleDelete, handleEdit }) => {
  const pathName = usePathname();
  const { push } = useRouter();
  const { user, setUser } = useContext(userContext);
  const [copied, setCopied] = useState('')

  const handleCopy = () => {
    setCopied(post.prompt)
    navigator.clipboard.writeText(post.prompt)
    setTimeout(() => {
      setCopied('')
    }, 3000)
  }

  return (
    <div className='prompt_card'>
      <div className="flex justify-between items-start gap-5">
        <div className='flex-1 flex justify-start items-center gap-3 cursor-pointer '>
          <Image
            src={post.User.image}
            width={40}
            height={40}
            alt="User Image"
            className='rounded-full object-contain'
          />

          <div className="flex flex-col">
            <h3 className="font-santoshi font-semibold text-gray-900">
              {post.User.username}
            </h3>
            <p className="font-inter text-sm text-gray-500">
              {post.User.email}
            </p>
          </div>
        </div>
        <div className="copy_btn" onClick={() => { handleCopy() }}>
          <Image
            src={copied === post.prompt ? 'assets/icons/tick.svg' : 'assets/icons/copy.svg'}
            width={12}
            height={12}
          />
        </div>
      </div>
      <p className='my-4 font-satoshi text-sm text-gray-700'>{post.prompt}</p>
      <p className='font-inter text-sm blue_gradient cursor-pointer'
        onClick={() => handleTagClick && handleTagClick(post.tag)}>
        #{post.tag}
      </p>

      {
        user?.email === post.User.email && pathName === '/profile' && (
          <div className='mt-5 flex-center gap-4 border-t border-gray-100 pt-3'>
            <p className='font-inter textt-sm green_gradient cursor-pointer'
              onClick={() => handleEdit && handleEdit(post.id)}>Edit</p>
            <p className='font-inter textt-sm orange_gradient cursor-pointer'
              onClick={() => handleDelete && handleDelete(post.id)}>Delete</p>
          </div>
        )
      }
    </div>
  )
}

export default PromptCard