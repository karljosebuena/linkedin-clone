import React from 'react'
import './Header.css'

import SearchIcon from '@material-ui/icons/Search';
import HomeIcon from '@material-ui/icons/Home';
import SupervisorAccountIcon from '@material-ui/icons/SupervisorAccount';
import BusinessCenterIcon from '@material-ui/icons/BusinessCenter';
import NotificationsIcon from '@material-ui/icons/Notifications';
import ChatIcon from '@material-ui/icons/Chat';

import HeaderOption from './HeaderOption';

function Header() {
  return (
    <div className='header'>
      <div className="header_left">
        <img
          src="https://www.flaticon.com/svg/static/icons/svg/174/174857.svg"
          alt="Linkedin Clone Logo"
        />
        <div className="header__search">
          <SearchIcon />
          <input type="text" name="" id=""/>
        </div>
      </div>

      <div className="header_right">
        <HeaderOption Icon={HomeIcon} title='home'/>
        <HeaderOption Icon={SupervisorAccountIcon} title='My Network'/>
        <HeaderOption Icon={BusinessCenterIcon} title='Jobs'/>
        <HeaderOption Icon={ChatIcon} title='Messaging'/>
        <HeaderOption Icon={NotificationsIcon} title='Notifications'/>
        <HeaderOption
          avatar='https://media-exp1.licdn.com/dms/image/C5603AQHbK6W3AkiIsg/profile-displayphoto-shrink_100_100/0/1584342100874?e=1614816000&v=beta&t=7YLNlR6yxzlBDEExK6QZvaJiMd9hRnEHbMl4XWrByFk'
          title='Me'
        />
      </div>
    </div>
  )
}

export default Header
