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
		        		<ul className="parts">
		        			{props.current.info.parts.map((part, i)=>{
		        				return(
									<li key={i} className="part row">
										<div className="image text-center col-3 col-md-2">
											{(part.img) && (
												<img src={'/img/parts/'+part.img} className="photo" alt="part" />
											)}
										</div>
										<div className="col-6 col-md-7 d-flex align-items-center">{part.name}</div>
										<div className="col-3 d-flex align-items-center">{part.quantity} {' '+part.unit}</div>
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
								{props.current.descr.descr.split('\n').map((paragraph, i) => <p key={i}>{paragraph}</p>)}
					        </div>
                        </div>
                        <div className="col-2">
                        </div>
                        <div className="col-8">
							<div className="table">
                                <table>
									<thead>
										<tr>
											<th>Длина (см)</th>
											<th>Ширина (см)</th>
											<th>Толщина (см)</th>
											<th>Вес (гр)</th>
										</tr>
									</thead>
									<tbody>
										<tr>
											<td>{props.current.descr.table.height}</td>
											<td>{props.current.descr.table.width}</td>
											<td>{props.current.descr.table.depth}</td>
											<td>{props.current.descr.table.weight}</td>
										</tr>
									</tbody>
                                </table>
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