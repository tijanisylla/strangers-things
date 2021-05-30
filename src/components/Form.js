import React from "react";

const Form = () => {
  return (
    <>
    {/* Show the log-in screen on landing page, have a button at the bottom available to move to registration */}
      <form id="log-in">

        <label htmlFor="username">Username:</label>
        <input type="text" placeholder="user-name" minLength={4} required/>

        <label htmlFor="password">Password:</label>
        <input type="password" placeholder="password" minLength={8} required/>
              
        <button onClick={() => {
          // log-in button
        }}>Log-In</button>

        <button onClick={() => {
          // register button
        }}>Register</button>

      </form>
    </> );
};

export default Form;