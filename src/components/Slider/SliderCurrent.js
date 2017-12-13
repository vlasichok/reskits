import React from 'react'
import {Icon} from 'react-fa'

import {PartsModal, InfoModal} from './SliderCurrentModals'

const SliderCurrent = props => {

	let currentIndex = props.catalog.currentIndex
	let current = props.catalog.items[currentIndex]
	let currentImg = current.gallery.imgs[current.gallery.current]

	return(
		<div>
			{(window.innerWidth > 575) ? (
				<div className="current-item row mb-3 mb-md-4 mb-xl-5">
					<div className="col-xl-3 offset-xl-1 col-lg-3 col-md-4 col-sm-3">
						<img className="image d-none d-sm-block" src={'/img/' + currentImg} alt="medkit"/>
						<div className="w-100 text-center">
							<a onClick={() => props.goToNextImg(currentIndex, true)} className="mx-2 no-decoration"><Icon name="arrow-left" /></a>
							<span>{current.gallery.current+1} / {current.gallery.imgs.length}</span>
							<a onClick={() => props.goToNextImg(currentIndex, false)} className="mx-2 no-decoration"><Icon name="arrow-right" /></a>
						</div>
					</div>
					<div className="col-xl-7 col-lg-8 col-md-8 col-sm-9">
						<h3 className="name mb-md-3">
							{current.name}
							<button className="btn btn-light btn-sm mx-3" onClick={(e) => props.addItem(e, current)}>В корзину</button>
						</h3>
						<div className="descr d-none d-sm-block">
							{current.descr.split('\n').map((paragraph, i) => <p key={i}>{paragraph}</p>)}
				        </div>
				        <div className="descr-mobile d-sm-none no-decoration">
				        	<p>{current.info.text}</p>
				        </div>
				        <div>
				        	<a onClick={props.toggleInfoModal} className="m-2 ml-sm-0">Подробности</a>
				        	<a onClick={props.togglePartsModal} className="m-2">Состав</a>
				        </div>
			        </div>
		        </div>
		     ) : (
				<div className="current-item row mb-3 mb-md-4 mb-xl-5">
					<div className="col-10 offset-1 text-center">
						<h3 className="name">
							{current.name}
							<button className="btn btn-light btn-sm mx-3" onClick={(e) => props.addItem(e, current)}>В корзину</button>
						</h3>
					</div>
					<div className="col-10 offset-1">
						<img className="image" src={'/img/' + currentImg} alt="medkit"/>
					</div>
					<div className="col-12">
				        <div className="text-center mt-2">
				        	<button onClick={props.toggleInfoModal} className="btn btn-light btn-sm m-2 ml-sm-0">Подробности</button>
				        	<button onClick={props.togglePartsModal} className="btn btn-light btn-sm m-2">Состав</button>
				        </div>
			        </div>
		        </div>
		     )}

		     <PartsModal current={current} partsOpened={props.catalog.partsOpened}
		     	togglePartsModal={props.togglePartsModal} />

		     <InfoModal current={current} infoOpened={props.catalog.infoOpened}
		     	toggleInfoModal={props.toggleInfoModal} />
	     </div>
	)
}
export default SliderCurrent