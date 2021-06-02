import React from "react";
import {Link, Redirect} from "react-router-dom";

const Form = ({loggedIn, setLoggedIn}) => {
    return (
        <>
            <form id="log-in"  onSubmit={ async (event) => {
                event.preventDefault()
                const name = event.target[0].value
                const pass = event.target[1].value
              
                await fetch("https://strangers-things.herokuapp.com/api/2104-UIC-RM-WEB-FT/users/login", {
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
                }).then(response => response.json()
                ).then(result => {
                    console.log(result);
                    const token = result.data.token
                    localStorage.setItem("token", token)
                    setLoggedIn(true)
                    
                    document.props.history.push("/profile")
                }).catch(console.error)
                }}>
                  
              <label  htmlFor="username">Username:</label>
              <input type="text" placeholder="username" minLength={4} required/>
              
              <label htmlFor="password">Password:</label>
              <input type="password" placeholder="password" minLength={8} required/>
              
              <button type="submit">Log-in</button>
              
            </form>
            <p>Don't have an account? <Link to="/register">Sign up!</Link></p>
        </> );
};

export default Form;