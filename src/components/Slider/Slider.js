import React from 'react'
import { Modal, ModalHeader, ModalBody } from 'reactstrap';
import './Slider.css'
import {Icon} from 'react-fa'

class Slider extends React.Component {
	render(){
		const catalog = this.props.catalog
		let currentIndex = this.props.catalog.currentIndex
		let current = this.props.catalog.items[currentIndex]
		let currentImg = current.gallery.imgs[current.gallery.current]

		return(
			<div>
				<div className="container slider">
					<div className="current-item row mb-3 mb-md-4 mb-xl-5">
						<div className="col-xl-3 offset-xl-1 col-lg-3 col-md-4 col-sm-3 col-xs-12">
							<img className="image d-none d-sm-block" src={'/img/' + currentImg}/>
							<div className="w-100 text-center">
								<a onClick={() => this.props.goToNextImg(currentIndex, true)} className="mx-2 no-decoration"><Icon name="arrow-left" /></a>
								<span>{current.gallery.current+1} / {current.gallery.imgs.length}</span>
								<a onClick={() => this.props.goToNextImg(currentIndex, false)} className="mx-2 no-decoration"><Icon name="arrow-right" /></a>
							</div>
						</div>
						<div className="col-xl-7 col-lg-8 col-md-8 col-sm-9 col-xs-12">
							<h3 className="name mb-md-3">
								{current.name}
								<button className="btn btn-light btn-sm mx-3" onClick={(e) => this.props.addItem(e, current)}>В корзину</button>
							</h3>
							<div className="descr d-none d-sm-block">
								{current.descr.split('\n').map((paragraph, i) => <p key={i}>{paragraph}</p>)}
					        </div>
					        <div className="descr-mobile d-sm-none no-decoration">
					        	<p>{current.info.text}</p>
					        </div>
					        <div className="pl-4">
					        	<a onClick={this.props.toggleInfoModal} className="m-2">Подробности</a>
					        	<a onClick={this.props.togglePartsModal} className="m-2">Состав</a>
					        </div>
				        </div>
			        </div>
					<div className="items mt-1">
						{catalog.items.map((item, i)=>{
							return(
								<div className="item m-1 m-sm-3" key={i} onClick={(e) => this.props.chooseItem(e, i)}>
									<div className="icon text-sm-center mx-3 m-sm-0"><Icon name={item.icon} size="2x" /></div>
									<h5 className="name text-sm-center">{item.name}</h5>
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
				<Modal isOpen={catalog.infoOpened} size="lg" toggle={this.props.toggleInfoModal} backdrop={true}>
		        	<ModalHeader toggle={this.props.toggleInfoModal}>{current.name}</ModalHeader>
		        	<ModalBody>
		        		<div className="item-info">
			        		<div className="row">
			        			<div className="col-12">
			        				<div className="descr d-none d-sm-block">
										<p>{current.info.text}</p>
									</div>
					        		<div className="descr-mobile d-block d-sm-none">
										{current.descr.split('\n').map((paragraph, i) => <p key={i}>{paragraph}</p>)}
							        </div>
								</div>
			        		</div>
		        		</div>
					</ModalBody>
		        </Modal>
			</div>
		)
	}
}
export default Slider