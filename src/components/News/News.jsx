import React from 'react'
import './news.css'

import { posts } from '../../constants'
import Post from '../Post/Post'

const News = () => {
    const filteredPosts = posts.slice(0, 3);
    return (
        <section id='news'>
            <div className="container">

                <h2 className='section_title'>Recent Blog Posts</h2>
                <div className="row">
                    {filteredPosts.map(post => (
                        <div key={post.id} className="col-lg-4 col-md-6 col-sm-12">
                            <Post post={post}/>
                        </div>
                    ))}

                </div>

            </div>

        </section>
    )
}

export default News