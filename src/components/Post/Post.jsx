import React from 'react'
import './post.css'
const Post = ({ post }) => {
  return (
    <div className='post-item-card'>
      <img src={post.img} alt="img" />
      <h2>{post.title}</h2>
      <p>{post.description.substring(0,100)}...</p>
      <a className='custom_button' href={`/post/${post.id}`}>Post Details</a>
      <p className='date'> 19 May 2021</p>
    </div>
  )
}

export default Post