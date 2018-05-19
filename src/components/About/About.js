import React from 'react'
import {Icon} from 'react-fa'
import './About.css'

const About = () => {
	return( 
		<div className="container about">
			<div className="row px-3">
				<div className="col-12 col-lg-10 offset-lg-1">
					<p><span className="title h2">Для спасения жизни человека важно объединить два фактора: навыки первой помощи + снаряжение для ее оказания.</span></p>
					<p>Наборы Reskits созданы для того, чтобы снаряжение для спасения жизни попало в правильные руки <strong>вовремя</strong>.</p>
					<p>Мы объединили современные стандарты первой помощи, практический опыт, оценку потребностей и ограничений жителей городов. Разработали простые, практичные, удобные, современные наборы для спасения жизни.</p>
					<p>Консультантами проекта выступают инструкторы FAST — компании по обучению первой помощи. FAST уже обучил более 15 000 человек, в том числе подразделения таких больших компании Unilever, Kernel, Метинвест, ArcelorMittal, Red Bull.</p>
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