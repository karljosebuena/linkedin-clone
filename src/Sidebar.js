import React from 'react'
import { Avatar } from '@material-ui/core'
import './Sidebar.css'

function Sidebar() {
	const recentItem = (topic) => (
		<div className="sidebar__recentItem">
			<span className="sidebar__hash">#</span>
			<p>{topic}</p>
		</div>
	)

	return (
		<div className='sibdebar'>
			<div className="sidebar__top">
				<img src='https://images.unsplash.com/photo-1514810771018-276192729582?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80' alt='' />
				<Avatar className='sidebar__avatar' />
				<h2>Karl Jose Buena</h2>
				<h4>karljosebuena@gmail.com</h4>
			</div>

			<div className="sidebar__stats">
				<div className="sidebar__stat">
					<p>Who viewed you</p>
					<p className="sidebar__statNumber">81</p>
				</div>
				<div className="sidebar__stat">
					<p>Views of your post</p>
					<p className="sidebar__statNumber">322</p>
				</div>
			</div>

			<div className="sidebar__bottom">
				<p>Recent</p>
				{recentItem('reactjs')}
				{recentItem('programming')}
				{recentItem('softwareengineering')}
				{recentItem('design')}
				{recentItem('developer')}
			</div>
		</div>
	)
}

export default Sidebar
