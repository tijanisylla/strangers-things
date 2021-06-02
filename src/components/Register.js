import {Link} from "react-router-dom";
import baseUrl from "./URL"

const Register = ({loggedIn, setLoggedIn}) => {
  const handleSubmit = async (event) => {
    event.preventDefault();
    const name = event.target[0].value;
    const pass = event.target[1].value;
      
    const response = await fetch(`${baseUrl}/users/register`, {
      method: "POST",
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        user: {
          username: `${name}`,
          password: `${pass}`
        }
      })
    }).then(response => response.json())
      .then(result => {
        console.log(result);
        const token = result.data.token
        localStorage.setItem("token", token)
      })
      .catch(console.error);
        
    setLoggedIn(true);
    location.assign("/profile");
  };

  return (
        <>
            <form id="register"  onSubmit={handleSubmit}>

              <label  htmlFor="username">Username:</label>
              <input type="text" placeholder="username" minLength={4} required/>
        
              <label htmlFor="password">Password:</label>
              <input type="password" placeholder="password" minLength={8} required/>
        
              <button type="submit">Register</button>

            </form>
            <p>Back to <Link to="/login">Log-In</Link></p>
        </> );
};

export default Register;