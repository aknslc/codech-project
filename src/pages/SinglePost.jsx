import React from 'react'
import { posts } from '../constants'
import { useParams } from 'react-router-dom'


// components
import Navbar from '../components/Navbar/Navbar'
import Footer from '../components/Footer/Footer'
import Banner from '../components/Banner/Banner'
import PostContent from '../components/PostContent/PostContent'


const SinglePost = () => {
    const { id } = useParams();

    const filteredPost = posts.filter(item => item.id === id)[0];



    return (
        <div id='single-post'>
            <Navbar />

            <Banner title={filteredPost.title} />

            <PostContent filteredPost={filteredPost}/>

            <Footer />
        </div>
    )
}

export default SinglePost