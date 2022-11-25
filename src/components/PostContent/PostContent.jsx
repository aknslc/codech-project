import React from 'react'
import './postContent.css'

const PostContent = ({ filteredPost }) => {
    return (
        <>
            <div className="container">
                <div className="post_content py-5">
                    <div className="row justify-content-between align-items-center">
                        <div className="col-lg-6 col-md-12 col-sm-12">
                            <img src={filteredPost.img} alt={filteredPost.title} />
                        </div>

                        <div className="col-lg-6 col-md-12 col-sm-12">
                            <h4>{filteredPost.title}</h4>
                            <p>{filteredPost.description}</p>
                        </div>

                    </div>
                </div>
            </div>
        </>
    )
}

export default PostContent