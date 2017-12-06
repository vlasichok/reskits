import React from 'react';

import './MainMenu.css';
import {Icon} from 'react-fa'

const MainMenu = (props) => {
	return (
		<div className="text-right pull-right my-4">
			<ul className="main-menu d-none d-md-block">
				<li><a href="#main">Главная</a></li>
				<li><a href="#catalog">Каталог</a></li>
				<li><a href="#details">FAQ</a></li>
				<li><a href="#test">Подобрать</a></li>
				<li><a href="#about">О нас</a></li>
			</ul>
			<a className="d-block d-md-none" onClick={props.toggleMobileMenu}><Icon name="bars" size="2x" /></a>
		</div>
	)
}
export default MainMenu