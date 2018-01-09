import React from 'react'
import {Icon} from 'react-fa'
import './About.css'

const About = () => {
	return( 
		<div className="container about">
			<div className="row px-3">
				<div className="col-md-10 offset-md-1 col-lg-8 offset-lg-2">
					<p><h1 class="title">В ситуации, где счет идет на секунды,</h1> для спасения жизни человека должны объединиться два фактора: навыки первой помощи и снаряжение для ее оказания.</p>
					<p>Reskits созданы для того, чтобы необходимое снаряжение попало в правильные руки вовремя.</p>
					<p>Мы объединили современные стандарты первой помощи, практический опыт, оценку потребностей и ограничений горожан. Так мы разработали простые, практичные, удобные, современные наборы для спасения жизни.</p>
				</div>
			</div>
			<div className="row mt-2">
				<div className="col-12 text-center">
					<a href="#" className="no-decoration"><Icon name="facebook" size="2x" /></a>
					<a href="#" className="ml-4 no-decoration"><Icon name="instagram" size="2x" /></a>
				</div>
			</div>
		</div>
    )
}
export default About