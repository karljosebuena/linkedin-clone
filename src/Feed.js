import React from 'react'
import './Feed.css'
import CreateIcon from '@material-ui/icons/Create';
import InputOption from './InputOption';

import PhotoIcon from '@material-ui/icons/Photo';
import YouTubeIcon from '@material-ui/icons/YouTube';
import EventAvailableIcon from '@material-ui/icons/EventAvailable';
import CalendarViewDayIcon from '@material-ui/icons/CalendarViewDay';

function Feed() {
  return (
    <div className='feed'>
      <div className="feed__inputContainer">
        <div className="feed__input">
          <CreateIcon />
          <form>
            <input type="text"/>
            <button type="submit">Send</button>
          </form>
        </div>
        <div className="feed__inputOptions">
          <InputOption Icon={PhotoIcon} title='Photo' color='#70BFF9'/>
          <InputOption Icon={YouTubeIcon} title='Video' color='#E7A33E'/>
          <InputOption Icon={EventAvailableIcon} title='Event' color='#C0CBCD'/>
          <InputOption Icon={CalendarViewDayIcon} title='Write Article' color='#7FC15E'/>
        </div>
      </div>
    </div>
  )
}

export default Feed
