import React from "react";
import { Link } from "react-router-dom";
import baseUrl from "./URL";

const Form = () => {
    async function handleSubmit(event) {
        event.preventDefault();

        const name = event.target[0].value;
        const pass = event.target[1].value;
        
        try {
            const response = await fetch(`${baseUrl}/users/login`, {
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
            });
            const result = await response.json();
            const token = result.data.token;

            localStorage.setItem("token", token);
            localStorage.setItem("user", name);
        } catch (error) {
        console.error(error);
        };

        location.assign("/posts");
    };
    
    return (
        <>
            <form id="log-in" onSubmit={handleSubmit}>
                        
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