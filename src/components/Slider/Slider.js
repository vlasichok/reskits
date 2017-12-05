import React from 'react'
import './Slider.css'
import {Icon} from 'react-fa'

class Slider extends React.Component {
	render(){
		let currentIndex = this.props.catalog.currentIndex
		let current = this.props.catalog.items[currentIndex]

		return(
			<div className="container slider">
				<div className="current-item row">
					<div className="col-6">
						<h1 className="text-right"><Icon name="medkit" size="2x" className="p-3 m-3" /></h1>
					</div>
					<div className="col-6">
						<h3 className="name">
							{current.name}
							<button className="mx-3" onClick={(e) => this.props.addItem(e, current)}>Add</button>
						</h3>
						<div className="descr">
							{current.descr.split('\n').map((paragraph, i) => <p key={i}>{paragraph}</p>)}
				        </div>
			        </div>
		        </div>
				<div className="items mt-2">
					{this.props.catalog.items.map((item, i)=>{
						return(
							<div className="item" key={i} onClick={(e) => this.props.chooseItem(e, i)}>
								<p className="text-center m-0"><Icon name="medkit" size="2x" /></p>
								<h5 className="name">{item.name}</h5>
							</div>
						)
					})}
				</div>
			</div>
		)
	}
}
export default Slider