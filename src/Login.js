import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { login } from './features/userSlice';
import { auth } from './firebase';
import './Login.css'

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [profilePic, setProfilePic] = useState("");

  const dispatch = useDispatch();

  const register = () => {
    if (!name) {
      return alert("Please enter a full name!");
    }

    auth.createUserWithEmailAndPassword(email, password)
      .then(userAuth => {
        userAuth.user.updateProfile({
          displayName: name,
          photoURL: profilePic,
        })
          .then(() => {
            dispatch(login({
              uid: userAuth.user.uid,
              email,
              displayName: name,
              photoUrl: profilePic
            }))
          })
      })
      .catch(e => console.log(e));
  };

  const loginToApp = e => {
    e.preventDefault();

    auth.signInWithEmailAndPassword(email, password)
      .then(userAuth => {
        const { uid, email, displayName, photoURL: profileUrl } = userAuth.user;
        dispatch(login({
          uid,
          email,
          displayName,
          profileUrl
        }))
      })
      .catch(e => console.log(e))
  };

  return (
    <div className='login'>
      <img
        src="https://techcrunch.com/wp-content/uploads/2012/11/linkedin-logo.png"
        alt="Login Logo"
      />

      <form>
        <input
          value={name}
          onChange={e => setName(e.target.value)}
          type="text"
          placeholder="Full name (required if registering)"
        />
        <input
          value={profilePic}
          onChange={e => setProfilePic(e.target.value)}
          type="text"
          placeholder="Profile pic URL (optional)"
        />
        <input
          value={email}
          onChange={e => setEmail(e.target.value)}
          type="email"
          placeholder="Email"
        />
        <input
          value={password}
          onChange={e => setPassword(e.target.value)}
          type="password"
          placeholder="Password"
        />
        <button type="submit" onClick={loginToApp}>Sign In</button>
      </form>

      <p>
        Not a member?&nbsp;
        <span className="login__register" onClick={register}>Register Now</span>
      </p>
    </div>
  )
}

export default Login
