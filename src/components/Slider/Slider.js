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
					<div className="current-item row mb-3 mb-lg-4">
						<div className="col-lg-3 offset-lg-2 col-md-4 col-sm-3 col-xs-12">
							<img className="image d-none d-sm-block" src="/img/UK1.jpg" />
						</div>
						<div className="col-lg-6 col-md-8 col-sm-9 col-xs-12">
							<h3 className="name">
								{current.name}
								<button className="btn btn-light btn-sm mx-3 pull-right" onClick={(e) => this.props.addItem(e, current)}>В корзину</button>
							</h3>
							<div className="descr">
								{current.descr.split('\n').map((paragraph, i) => <p key={i}>{paragraph}</p>)}
					        </div>
					        <div className="text-center">
					        	<a onClick={this.props.toggleInfoModal}>Узнать больше...</a>
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
				<Modal isOpen={catalog.infoOpened} size="lg" toggle={this.props.toggleInfoModal} backdrop={true}>
		        	<ModalHeader toggle={this.props.toggleInfoModal}>{current.name}</ModalHeader>
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