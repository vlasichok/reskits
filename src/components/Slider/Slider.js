import React from 'react'
import { Modal, ModalHeader, ModalBody } from 'reactstrap';
import './Slider.css'
import {Icon} from 'react-fa'

class Slider extends React.Component {
	render(){
		const catalog = this.props.catalog
		let currentIndex = this.props.catalog.currentIndex
		let current = this.props.catalog.items[currentIndex]

		return(
			<div>
				<div className="container slider">
					<div className="current-item row mb-3 mb-md-4 mb-xl-5">
						<div className="col-xl-3 offset-xl-1 col-lg-3 col-md-4 col-sm-3 col-xs-12">
							<img className="image d-none d-sm-block" src="/img/UK1.jpg" />
						</div>
						<div className="col-xl-7 col-lg-8 col-md-8 col-sm-9 col-xs-12">
							<h3 className="name mb-md-3">
								{current.name}
								<button className="btn btn-light btn-sm mx-3" onClick={(e) => this.props.addItem(e, current)}>В корзину</button>
							</h3>
							<div className="descr">
								{current.descr.split('\n').map((paragraph, i) => <p key={i}>{paragraph}</p>)}
					        </div>
					        <div className="pl-4">
					        	<a onClick={this.props.togglePartsModal}>Состав</a>
					        </div>
				        </div>
			        </div>
					<div className="items mt-1">
						{catalog.items.map((item, i)=>{
							return(
								<div className="item m-1 m-sm-3" key={i} onClick={(e) => this.props.chooseItem(e, i)}>
									<p className="text-center m-0"><Icon name={item.icon} size="2x" /></p>
									<h5 className="name text-center">{item.name}</h5>
								</div>
							)
						})}
					</div>
				</div>
				<Modal isOpen={catalog.partsOpened} size="lg" toggle={this.props.togglePartsModal} backdrop={true}>
		        	<ModalHeader toggle={this.props.togglePartsModal}>{current.name}</ModalHeader>
		        	<ModalBody>
		        		<div className="row">
		        			<div className="col-12">
				        		<ul className="list-group">
				        			{current.info.parts.map((part, i)=>{
				        				return(
											<li key={i} className="list-group-item">
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
			</div>
		)
	}
}
export default Slider