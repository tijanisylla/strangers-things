import React, {useEffect, useState} from "react";
import baseUrl from "./URL";
import NewPost from "./NewPost";
import EditPost from "./EditPost";
import DeletePost from "./DeletePost";
import './style/Style.css';
import { render } from "react-dom";

const Posts = ({posts, setPosts, searchTerm, setSearchTerm}) => {
   
    const [makingPost, setMakingPost] = useState(false);
    const [isEditing, setEditing] = useState(false);
    const [deleting, setDeleting] = useState(false);
    const [targetId, setTargetId] = useState("");

    useState(() => {
        const fetchPosts = async () => {
            const response = await fetch(`${baseUrl}/posts`,
                localStorage.getItem("token") ? {
                    headers: {
                        'Authorization': `Bearer ${localStorage.getItem("token")}`
                    }
                } : null);
            const result = await response.json();
            console.log(result)
            setPosts(result.data.posts);
        };

        fetchPosts();
    }, []);

    
    const handleEdit = async (event) => {
        event.preventDefault();
        const thisPostId = event.target.parentElement.id;
        setEditing(true);
        setTargetId(thisPostId);
    };

    const handleDelete = async (event) => {
        event.preventDefault();
        const thisPostId = event.target.parentElement.id;
        setTargetId(thisPostId);
        setDeleting(true);
    };

    const handleSearch = async (event) => {
        event.preventDefault()
        const searchText = event.target[0].value
        const searchPosts = async () => {
            try {
                const response = await fetch(`${baseUrl}/posts`,
                    localStorage.getItem("token") ? {
                        headers: {
                            'Authorization': `Bearer ${localStorage.getItem("token")}`
                        }
                    } : null);
                const result = await response.json();
                console.log(result)
                setPosts(result.data.posts)
            } catch (error) {
                console.error(error)
            }
            const filteredPosts = posts.filter( (post) => {
                if (post.title.includes(`${searchText}`) || post.description.includes(`${searchText}`)) {
                
                    return (
                        
                    {post}
                    )
                }
            })
            setPosts(filteredPosts)
        }
        searchPosts()
    };


    return (
        <>  
            <header id="post-hd">
                <h1>Buy Faster Sell Faster !</h1>
            </header>
            
            <form id="search-bar" onSubmit={ (event) => {handleSearch(event); console.log(searchTerm)} }>
                <label htmlFor="search-term">Search: </label>
                <input name="search-term" type="text" placeholder="search"/>
                <button type="submit" >Submit</button>
            </form>
            {
                localStorage.getItem("user") ? 
                <button onClick={ (event) => {event.preventDefault(); setMakingPost(true)}
                }>New Post</button>
                : null
            }
            {makingPost ? <NewPost setMakingPost={setMakingPost} /> : null}
            {
                posts.map((post, idx) => { 
                    return (
                        <div className="post-item" id={post._id} key={idx}>
                            <div className="card">
                            <h3 className="post-title">{post.title}</h3>
                            <p className="post-body">{post.description}</p>
                            </div>
                            <div className="post-info"> 
                                <p className="post-price">Price:{post.price}</p>
                                <p className="post-loc">
                                    <img id="location" src="https://i.pinimg.com/474x/cb/17/c6/cb17c606f41f47aa505e6d203df8716d.jpg"/>
                                    {post.location}</p>
                                <p className="post-del">{`${post.willDeliver}`}</p>
                            </div>
                            {post.isAuthor ? <button onClick={handleEdit}>Edit</button> : null}
                            {post.isAuthor ? <button onClick={handleDelete}>Delete</button> : null}
                        </div> );
                })
            }
            {isEditing ? <EditPost setEditing={setEditing} targetId={targetId} /> : null}
            {deleting ? <DeletePost setDeleting={setDeleting} targetId={targetId} /> : null}
        </>  );   
};

export default Posts;