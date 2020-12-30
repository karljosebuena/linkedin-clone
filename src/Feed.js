import React, { useState, useEffect } from 'react'
import CreateIcon from '@material-ui/icons/Create';
import InputOption from './InputOption';
import FlipMove from 'react-flip-move';
import Post from './Post';
import './Feed.css'

import PhotoIcon from '@material-ui/icons/Photo';
import YouTubeIcon from '@material-ui/icons/YouTube';
import EventAvailableIcon from '@material-ui/icons/EventAvailable';
import CalendarViewDayIcon from '@material-ui/icons/CalendarViewDay';

import { db } from './firebase';

import firebase from 'firebase';
import { useSelector } from 'react-redux';
import { selectUser } from './features/userSlice';

function Feed() {
  const [input, setInput] = useState('');
  const [posts, setPosts] = useState([]);

  const user = useSelector(selectUser);
  const { email, displayName: name, photoUrl } = user || {};

  useEffect(() => {
    db.collection('posts').orderBy('timestamp', 'desc').onSnapshot(snapshot => (
      setPosts(snapshot.docs.map(doc => (
        {
          id: doc.id,
          data: doc.data(),
        }
      )))
    ))
  }, [])

  const sendPost = e => {
    e.preventDefault();

    db.collection('posts').add({
      name,
      description: email,
      message: input,
      photoUrl,
      timestamp: firebase.firestore.FieldValue.serverTimestamp()
    })

    setInput('');
  };

  return (
    <div className='feed'>
      <div className="feed__inputContainer">
        <div className="feed__input">
          <CreateIcon />
          <form>
            <input value={input} onChange={e => setInput(e.target.value)} type="text" />
            <button onClick={sendPost} type="submit">Send</button>
          </form>
        </div>
        <div className="feed__inputOptions">
          <InputOption Icon={PhotoIcon} title='Photo' color='#70BFF9' />
          <InputOption Icon={YouTubeIcon} title='Video' color='#E7A33E' />
          <InputOption Icon={EventAvailableIcon} title='Event' color='#C0CBCD' />
          <InputOption Icon={CalendarViewDayIcon} title='Write Article' color='#7FC15E' />
        </div>
      </div>

      {/* Posts */}
      <FlipMove>
        {posts.map(({ id, data: { name, description, message, photoUrl } }) => (
          <Post
            key={id}
            name={name}
            description={description}
            message={message}
            photoUrl={photoUrl}
          />
        ))}
      </FlipMove>
    </div>
  )
}

export default Feed
