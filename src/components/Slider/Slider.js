import React from 'react'
import './Slider.css'

import Current from './SliderCurrent'
import Items from './SliderItems'

const Slider = props => {
	return(
		<div className="w-100">
			<div className="container slider">
				<Current {...props} />
				<Items catalog={props.catalog} 
					chooseItem={props.chooseItem} />
			</div>
		</div>
	)
}
export default Slider