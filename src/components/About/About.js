import React from 'react'
import {Icon} from 'react-fa'
import './About.css'

const About = () => {
	return( 
		<div className="container about">
			<div className="row px-3">
				<p>В ситуации, где счет идет на секунды, для спасения жизни человека должны объединиться два фактора: навыки первой помощи и снаряжение для ее оказания.</p>
				<p>Reskits созданы для того, чтобы необходимое снаряжение попало в правильные руки вовремя.</p>
				<p>Мы объединили современные стандарты первой помощи, практический опыт, оценку потребностей и ограничений горожан. Так мы разработали простые, практичные, удобные, современные наборы для спасения жизни.</p>
				<p className="w-100 mt-2 text-center">
					<a href="#" className="p-3 no-decoration"><Icon name="facebook" size="2x" /></a>
					<a href="#" className="p-3 no-decoration"><Icon name="instagram" size="2x" /></a>
				</p>
			</div>
		</div>
    )
}
export default About