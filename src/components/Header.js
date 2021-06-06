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
        </header> );
};

export default Header;