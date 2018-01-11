import React from 'react'
import {Modal, ModalHeader, ModalBody} from 'reactstrap';

const PartsModal = props => {
	return(
		<Modal isOpen={props.partsOpened} size="lg" toggle={props.togglePartsModal} backdrop={true}>
        	<ModalHeader toggle={props.togglePartsModal}>{props.current.name}</ModalHeader>
        	<ModalBody>
        		<div className="row">
        			<div className="col-12">
		        		<ul className="list-group parts">
		        			{props.current.info.parts.map((part, i)=>{
		        				return(
									<li key={i} className="list-group-item part">
										<img src={'/img/parts/'+part.img} className="photo" alt="part" />
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
		<Modal isOpen={props.infoOpened} size="lg" toggle={props.toggleInfoModal} backdrop={true}>
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

export {PartsModal, InfoModal}