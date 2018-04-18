import React from 'react'
import {Icon} from 'react-fa'
import './About.css'

const About = () => {
	return( 
		<div className="container about">
			<div className="row px-3">
				<div className="col-12 col-lg-10 offset-lg-1">
					<p><span className="title h2">Для спасения жизни человека должны объединиться два фактора: навыки первой помощи и снаряжение для ее оказания.</span></p>
					<p>Reskits созданы для того, чтобы необходимое снаряжение попало в правильные руки вовремя.</p>
					<p>Мы объединили современные стандарты первой помощи, практический опыт, оценку потребностей и ограничений горожан. Так мы разработали простые, практичные, удобные, современные наборы для спасения жизни.</p>
					<p>Консультантами проекта выступают инструкторы FAST — компании по обучению первой помощи, студентами которой стали более 15000 человек, в том числе подразделения Unilever, Kernel, Метинвест, ArcelorMittal, Red Bull.</p>
				</div>
			</div>
			<div className="row mt-2">
				<div className="col-12 text-center">
					<a href="https://www.facebook.com/Reskits-1735879073092016/" target="about_blank" className="no-decoration"><Icon name="facebook" size="2x" /></a>
					<a href="https://www.instagram.com/reskits/" target="about_blank" className="ml-4 no-decoration"><Icon name="instagram" size="2x" /></a>
				</div>
			</div>
			<div className="row mt-3">
				<p className="w-100 text-center"><a href="maulto: tel">+38 (068) 097-2-097</a><br/><a href="maulto: hello@reskits.com.ua">hello@reskits.com.ua</a></p>
			</div>
		</div>
    )
}
export default About