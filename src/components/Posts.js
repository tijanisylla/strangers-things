import React, {useState} from "react"
import baseUrl from "./URL"
import './style/Post.css'

const Posts = ({posts, setPosts}) => {
    useState(() => {
        const fetchPosts = async () => {
            const response = await fetch(`${baseUrl}/posts`);
            const result = await response.json();
            console.log(result)
            setPosts(result.data.posts);
        };
        fetchPosts();
    }, []);
    
    return (
        <>
            <h1>Posts</h1>
            <button onClick={() => {location.assign("/new")}}>New Post</button>
            {
                posts.map( (post, idx) => { 
                    return (
                        <div key={"post"+idx}>
                            <h3>{post.title}</h3>
                            <p>{post.description}</p>
                        </div>);
                } )
            }   
        </> );
};

export default Posts;