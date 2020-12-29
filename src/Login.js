import React from 'react';
import './Login.css'

function Login() {
  const register = e => {};

  const login = e => {
    e.preventDefault();
  };

  return (
    <div className='login'>
      <img
        src="https://techcrunch.com/wp-content/uploads/2012/11/linkedin-logo.png"
        alt="Login Logo"
      />

      <form>
        <input
          type="text"
          placeholder="Full name (required if registering)"
        />
        <input
          type="text"
          placeholder="Profile pic URL (optional)"
        />
        <input
          type="email"
          placeholder="Email"
        />
        <input
          type="password"
          placeholder="Password"
        />
        <button type="submit" onClick={login}>Sign In</button>
      </form>

      <p>
        Not a member?&nbsp;
        <span className="login__register" onClick={register}>Register Now</span>
      </p>
    </div>
  )
}

export default Login
