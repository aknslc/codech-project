import React from 'react'
import './posts.css'

import { postsTitle } from '../../constants'
import { posts } from '../../constants'

// components 
import Post from '../Post/Post'


const Posts = () => {
    return (
        <section>
            <div className="container">
                <ul className='blog_posts'>
                    {postsTitle.map(item => (
                        <li key={item.id} className='post_item'>
                            <a className={item.id === "all"? "active": 0} href="#!">
                                {item.title}
                            </a>
                        </li>
                    ))}
                </ul>


                <div className="row">
                    {posts.map(post => (
                        <div key={post.id} className="col-lg-4 col-md-6 col-sm-12">
                            <Post post={post} />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Posts