import React from 'react'
import {Icon} from 'react-fa'

import Image from './SliderCurrentImage'
import Color from './SliderCurrentColor'
import {PartsModal, InfoModal} from './SliderCurrentModals'

const SliderCurrent = props => {

	let currentIndex = props.catalog.currentIndex
	let current = props.catalog.items[currentIndex]

	return(
		<div>
			{(window.innerWidth > 767) ? (
				<div className="current-item row mb-3 mb-sm-0 mb-md-4 mb-xl-5">
					<div className="col-sm-3 col-md-4 col-lg-3 col-xl-3 offset-lg-1 offset-xl-2 text-center">
						<Image current={current} currentIndex={currentIndex} goToNextImg={props.goToNextImg} />
					</div>
					<div className="col-sm-9 col-md-8 col-lg-7 col-xl-5">
						<div className="info d-flex align-items-center">
							<div className="mb-4">
								<h3 className="name mb-md-3">
									{current.name}
									<button className="btn btn-light btn-sm mx-3" onClick={(e) => props.addItem(e, current)}>В корзину</button>
								</h3>
								<div className="mb-2">
									<Color current={current} chooseColor={props.chooseColor} />
								</div>
								<div className="descr d-none d-md-block">
						        	<p>{current.info.text}</p>
						        </div>
						        <div>
						        	<a onClick={props.toggleInfoModal} className="m-2 ml-sm-0">Подробности</a>
						        	<a onClick={props.togglePartsModal} className="m-2">Состав</a>
						        </div>
						    </div>
						</div>
			        </div>
		        </div>
		     ) : (
			     <div>
			     	{props.catalog.items.map((item, i) => {
						return(
							<div className="slide">
								<div className="current-item--mobile row mt-2 mt-sm-4">
									<div className="col-10 offset-1 text-center d-block d-sm-none">
										<h3 className="name m-0">{item.name}</h3>
										<p className="m-0">{item.price} ₴</p>
									</div>
									<div className="col-10 offset-1 col-sm-5 offset-sm-0 mt-sm-2 text-center">
										<Image current={item} currentIndex={i} goToNextImg={props.goToNextImg} />
									</div>
									<div className="col-12 col-sm-7">
								        <div className="text-center text-sm-left mt-2 mt-sm-4">
								 			<div className="mb-3 mb-sm-2 d-none d-sm-block">
												<h4 className="name m-0 float-left">{item.name}</h4>
												<span className="price d-inline-block my-1 mx-2"> — {item.price}₴</span>
											</div>
											<div>
												<Color current={item} chooseColor={props.chooseColor} />
											</div>
								        	<div className="descr-mobile d-none d-sm-block no-decoration">
									        	<p>{item.info.text}</p>
									        </div>
									        <div className="mt-2 mt-sm-0">
									        	<button onClick={props.toggleInfoModal} className="btn btn-light btn-sm mx-2 ml-sm-0"><Icon name="info" className="mx-1" /></button>
									        	<button onClick={props.togglePartsModal} className="btn btn-light btn-sm mx-2"><Icon name="list"/></button>
									        	<button className="btn btn-light btn-sm mx-2" onClick={(e) => props.addItem(e, current)}>В корзину</button>
								        	</div>
								        </div>
							        </div>
							    </div>
							</div>
						)
			     	})}
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