import {Link} from "react-router-dom"

const Header = ({loggedIn, setLoggedIn}) => {
    const logOutHandler = async (event) => {
        event.preventDefault()
        localStorage.removeItem("token")
        localStorage.removeItem("user")
        setLoggedIn(false)
        location.assign("/")
    };
    
    return (
        <header>
            <h1>Stranger's Things</h1>
            <div id="nav">
                {   
                    !loggedIn && !localStorage.getItem("token") 
                    ? <Link id="login" to="/login">Log In</Link> 
                    : null
                }
                <Link to="/posts">Posts</Link>
                {/* <Link to="/profile">Profile</Link> */}
                { !loggedIn ? <Link to="/" onClick={(event) => {logOutHandler(event)}}>Log Out</Link> : null }
            </div>
        </header> );
};

export default Header;