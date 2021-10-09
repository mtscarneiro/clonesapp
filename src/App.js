import React from 'react'
import './App.css';
import SideBar from "./components/SideBar";

const App = () => {
	return (
		<div className={"app--window"}>
			<SideBar />
			<div className={"content--area"}>
				...
			</div>
		</div>
	)
}

export default App;
