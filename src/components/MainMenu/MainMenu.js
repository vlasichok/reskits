import React from 'react';

import './MainMenu.css';
import {Icon} from 'react-fa'

const MainMenu = (props) => {
	return (
		<div className="text-right pull-right my-3 my-sm-4">
			<ul className="main-menu d-none d-md-block">
				<li><a href="#details" className={(props.currentSection === '#details') ? 'current' : ''}>Преимущества</a></li>
                <li><a href="#catalog" className={(props.currentSection === '#catalog') ? 'current' : ''}>Наборы</a></li>
				<li><a href="#test" className={(props.currentSection === '#test') ? 'current' : ''}>Подобрать</a></li>
				<li><a href="#about" className={(props.currentSection === '#about') ? 'current' : ''}>О нас</a></li>
			</ul>
			<a className="d-block d-md-none no-decoration" onClick={props.toggleMobileMenu}><Icon name="bars" size="2x" /></a>
		</div>
	)
}
export default MainMenu