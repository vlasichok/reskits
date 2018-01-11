import React from 'react'
import {Icon} from 'react-fa'

const Image = props => {
	let currentColor = props.current.colors[props.current.currColorIndex]
	let currentGallery = props.current.gallery[currentColor]
	let currentImg = currentGallery.imgs[currentGallery.current]

	return(
		<div className="image-wrapper w-100">
			<div className="image-underlay d-flex align-items-center justify-content-center">
				<Icon spin name="spinner" className="spinner" />
			</div>
			<div className="image">
				<img src={'/img/packs/250x250/' + currentImg} key={currentImg} alt="medkit"/>
			</div>

			<div className="w-100 text-center">
				<a onClick={() => props.goToNextImg(props.currentIndex, true)} className="mx-2 no-decoration"><Icon name="arrow-left" /></a>
				<span>{currentGallery.current+1} / {currentGallery.imgs.length}</span>
				<a onClick={() => props.goToNextImg(props.currentIndex, false)} className="mx-2 no-decoration"><Icon name="arrow-right" /></a>
			</div>
		</div>
	)
}
export default Image