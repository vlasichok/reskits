import React from 'react'

const Color = props => {
	let currentColor = props.current.colors[props.current.currColorIndex]

	return(
		<div className="colors">
			{props.current.colors.length > 1 && props.current.colors.map( (color, i) => {
				return( <a className={'mx-1 color ' + color + ((color === currentColor) ? ' current' : '')} onClick={e => props.chooseColor(e,i)}></a> )
			})}
		</div>
	)
}
export default Color