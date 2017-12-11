import React from 'react';

import './MainMenu.css';
import {Icon} from 'react-fa'

const MainMenu = (props) => {
	return (
		<div className="text-right pull-right my-4">
			<ul className="main-menu d-none d-md-block">
				<li><a href="#catalog" className={(props.currentSection === '#catalog') ? 'current' : ''}>Каталог</a></li>
				<li><a href="#details" className={(props.currentSection === '#details') ? 'current' : ''}>FAQ</a></li>
				<li><a href="#test" className={(props.currentSection === '#test') ? 'current' : ''}>Подобрать</a></li>
				<li><a href="#about" className={(props.currentSection === '#about') ? 'current' : ''}>О нас</a></li>
			</ul>
			<a className="d-block d-md-none no-decoration" onClick={props.toggleMobileMenu}><Icon name="bars" size="2x" /></a>
		</div>
	)
}
export default MainMenu