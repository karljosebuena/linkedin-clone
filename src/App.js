import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './App.css';
import { login, logout, selectUser } from './features/userSlice';
import Feed from './Feed';
import { auth } from './firebase';
import Header from './Header';
import Login from './Login';
import Sidebar from './Sidebar';

function App() {
  const user = useSelector(selectUser);

  const dispatch = useDispatch();

  useEffect(_ => {
    auth.onAuthStateChanged(userAuth => {
      if (!userAuth) {
        return dispatch(logout());
      }
      const { uid, email, displayName, photoURL: photoUrl } = userAuth;
      dispatch(login({
        uid,
        email,
        displayName,
        photoUrl
      }));
    })
  }, []);

  return (
    <div className="app">
      <Header />
      {!user ? <Login /> : (
        <div className="app__body">
          <Sidebar />
          <Feed />
          {/* widgets */}
        </div>
      )}
    </div>
  );
}

export default App;
