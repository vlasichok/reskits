import React from 'react'
import {Icon} from 'react-fa'

const Image = props => {
	let currentColor = props.current.colors[props.current.currColorIndex]
	let currentGallery = props.current.gallery[currentColor]
	let currentImg = currentGallery.imgs[currentGallery.current]

	return(
		<div>
			<img className="image" src={'/img/' + currentImg} alt="medkit"/>
			<div className="w-100 text-center">
				<a onClick={() => props.goToNextImg(props.currentIndex, true)} className="mx-2 no-decoration"><Icon name="arrow-left" /></a>
				<span>{currentGallery.current+1} / {currentGallery.imgs.length}</span>
				<a onClick={() => props.goToNextImg(props.currentIndex, false)} className="mx-2 no-decoration"><Icon name="arrow-right" /></a>
			</div>
		</div>
	)
}
export default Image