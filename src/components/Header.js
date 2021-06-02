import {Link} from "react-router-dom"

const Header = () => {
    return (
        <header>
            <h1>Stranger's Things</h1>
            <div id="nav">
                { !localStorage.getItem("token") ? <Link to="/login">Log In</Link> : null }
                <Link to="/posts">Posts</Link>
                <Link to="/profile">Profile</Link>
                <Link to="/" onClick={ (event) => {
                    // Log the user out, then return to home menu
                    event.preventDefault()
                    localStorage.removeItem("token")
                    location.assign("/")
                }}>Log Out</Link>
            </div>
        </header>
    );
};

export default Header;