import React from 'react';
import './MainMenu.css';

const MainMenu = () => {
	return (
		<div className="text-right pull-right my-4">
			<ul className="main-menu">
				<li><a href="#main">Main</a></li>
				<li><a href="#catalog">Catalog</a></li>
				<li><a href="#test">Test</a></li>
				<li><a href="#about">About</a></li>
			</ul>
		</div>
	)
}
export default MainMenu