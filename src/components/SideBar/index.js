import React from 'react'
import './Sidebar.css'

const SideBar = () => {
	return (
		<div>
			<header>
				<img className="header--avatar"
				     src="https://www.w3schools.com/howto/img_avatar.png"
				     alt="Avatar"/>
				<div className="header--buttons">
					...
				</div>
			</header>
			<div className="search">
				...
			</div>
			<div className="chatlist">
				...
			</div>
		</div>
	)
}

export default SideBar