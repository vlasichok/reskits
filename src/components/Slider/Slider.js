import React from 'react'

class Slider extends React.Component {
	render(){
		let currentIndex = this.props.catalog.currentIndex
		let current = this.props.catalog.items[currentIndex]

		return(
			<div>
				<h3>
					{current.name}
					<button className="mx-3" onClick={(e) => this.props.addItem(e, current)}>Add</button>
				</h3>
				<div>
					{current.descr.split('\n').map((paragraph, i) => <p key={i}>{paragraph}</p>)}
		        </div>
				<ul>
					{this.props.catalog.items.map((item, i)=>{
						return(
							<li key={i} onClick={(e) => this.props.chooseItem(e, i)}>{item.name}</li>
						)
					})}
				</ul>
			</div>
		)
	}
}
export default Slider