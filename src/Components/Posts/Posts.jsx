import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Post from './Post';

const Posts = () => {
    const posts = useLoaderData()
    return (
        <div>
            <h1>Posts {posts.length}</h1>
            <div className='grid grid-cols-1 md:grid-cols-4 gap-3 my-5'>
                {
                    posts.map((post, idx) =><Post key={idx} post={post}></Post>)
                }
            </div>
        </div>
    );
};

export default Posts;