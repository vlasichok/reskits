import React from 'react'
import {Modal, ModalHeader, ModalBody} from 'reactstrap';
import {Icon} from 'react-fa'

const PartsModal = props => {
	return(
		<Modal isOpen={props.partsOpened} size="lg" toggle={props.togglePartsModal} backdrop={true} className="partsModal">
        	<ModalHeader toggle={props.togglePartsModal}>{props.current.name}</ModalHeader>
        	<ModalBody>
        		<div className="row">
        			<div className="col-12">
		        		<ul className="list-group parts">
		        			{props.current.info.parts.map((part, i)=>{
		        				return(
									<li key={i} className="list-group-item part">
										{(part.img) && (
											<img src={'/img/parts/'+part.img} className="photo" alt="part" />
										)}
										<span>{part.name}</span>
										<span className="pull-right">{part.quantity} {part.unit}</span>
									</li>
								)
							})}
						</ul>
					</div>
        		</div>
			</ModalBody>
        </Modal>
    )
}

const InfoModal = props => {
	return(
		<Modal isOpen={props.infoOpened} size="lg" toggle={props.toggleInfoModal} backdrop={true} className="infoModal">
        	<ModalHeader toggle={props.toggleInfoModal}>{props.current.name}</ModalHeader>
        	<ModalBody>
        		<div className="item-info">
	        		<div className="row">
	        			<div className="col-12">
	        				<div className="descr">
								{props.current.descr.split('\n').map((paragraph, i) => <p key={i}>{paragraph}</p>)}
					        </div>
						</div>
	        		</div>
        		</div>
			</ModalBody>
        </Modal>
	)
}

const ImageModal = props => {
	let currentColor = props.current.colors[props.current.currColorIndex]
	let currentGallery = props.current.gallery[currentColor]
	let currentImg = currentGallery.imgs[currentGallery.current]

	return(
		<Modal isOpen={props.imageOpened} size="lg" toggle={props.toggleImageModal} backdrop={true} className="imageModal">
			<ModalHeader toggle={props.toggleImageModal}>{props.current.name}</ModalHeader>
        	<ModalBody>
				<div className="image">
					<img src={'/img/packs/original/' + currentImg} key={currentImg} alt="medkit" onClick={() => props.goToNextImg(props.currentIndex, false)}/>
				</div>
				<div className="controls w-100">
					<a onClick={() => props.goToNextImg(props.currentIndex, true)} className="control left no-decoration px-2 px-md-4"><Icon name="angle-left" /></a>
					<a onClick={() => props.goToNextImg(props.currentIndex, false)} className="control right no-decoration px-2 px-md-4"><Icon name="angle-right" /></a>
				</div>
			</ModalBody>
        </Modal>
	)
}

export {PartsModal, InfoModal, ImageModal}