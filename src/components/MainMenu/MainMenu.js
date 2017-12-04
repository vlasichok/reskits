import React from 'react';

import './MainMenu.css';
import {Icon} from 'react-fa'

const MainMenu = () => {
	return (
		<div className="text-right pull-right my-4">
			<ul className="main-menu d-none d-sm-block">
				<li><a href="#main">Main</a></li>
				<li><a href="#catalog">Catalog</a></li>
				<li><a href="#test">Test</a></li>
				<li><a href="#about">About</a></li>
			</ul>
			<a className="d-block d-sm-none"><Icon name="bars" size="2x" /></a>
		</div>
	)
}
export default MainMenu