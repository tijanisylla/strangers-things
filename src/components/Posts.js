import React, {useState} from "react"
import './style/Post.css'

const Posts = () => {
    const [posts, setPosts] = useState([]);
    
    useState(() => {
        const fetchPosts = async () => {
            const response = await fetch("https://strangers-things.herokuapp.com/api/2104-UIC-RM-WEB-FT/posts");
            const result = await response.json();
            console.log(result)
            setPosts(result.data.posts);
        };
        fetchPosts();
    }, []);
    
    return (
        <>
            <h1>Posts</h1>
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