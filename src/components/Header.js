import {useState} from "react";
import { Link } from "react-router-dom";
import baseUrl from "./URL";
import './style/Style.css'


const Header = ({posts, setPosts}) => {

    const [searchTerm, setSearchTerm] = useState("");

    function logOutHandler(event) {
        event.preventDefault();
        localStorage.removeItem("token");
        localStorage.removeItem("user");
        location.assign("/");
    };
    
    const handleSearch = async (event) => {
        event.preventDefault()
        setSearchTerm(event.target[0].value)
        try {
            const response = await fetch(`${baseUrl}/posts`,
                localStorage.getItem("token") ? {
                    headers: {
                        'Authorization': `Bearer ${localStorage.getItem("token")}`
                    }
                } : null);
            const result = await response.json();
            const foundPosts = result.data.posts
            const searchPosts = foundPosts.filter((post) => {
                if(post.title.includes(searchTerm)|| post.description.includes(searchTerm) || post.includes(searchTerm)) {
                    return  post
                }const fetchPosts = async () => {
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
            })

            setPosts(searchPosts);
        } catch (error) {
            console.error(error)
        }
        console.log(posts)
    } 

    return (
        <header id="page-hd">
            <h1>Strangers' Things</h1>
            <div id="nav">
                {   
                    !localStorage.getItem("user") ? 
                    <Link id="login" to="/login">Log In</Link> 
                    : null
                }
                <Link to="/posts">Posts</Link>
                {   
                    localStorage.getItem("user") ? 
                    <Link to="/" onClick={(event) => {logOutHandler(event)}}>Log Out</Link> 
                    : null
                }
            </div>
            <form id="search-bar" onSubmit={ (event) => {handleSearch();} }>
                <label htmlFor="search-term">Search: </label>
                <input name="search-term" type="text" placeholder="search"/>
                <button type="submit" >Search</button>
            </form>
        </header> );
};

export default Header;