import React from 'react'
import addIcon from '../../assets/add-icon.svg'
import AllPosts from '../All-Posts/AllPosts'
import { Link } from 'react-router-dom'

const PostPage = () => {
  return (
    <>
      <div className="flex justify-between items-center pb-4">

        <div>
          <span className=" bg-gradient-to-r from-[#FE5F6E] via-[#923CFF] to-[#2B7CFF] text-transparent bg-clip-text text-2xl font-semibold">Posts</span>
        </div>
        <Link to='/addpost'>
          <img className="cursor-pointer" src={addIcon} />
        </Link>
      </div>
      <AllPosts />
    </>
  )
}

export default PostPage