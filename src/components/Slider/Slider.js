import React from 'react'

class Slider extends React.Component {
	render(){
		let currentIndex = this.props.catalog.currentIndex
		let current = this.props.catalog.items[currentIndex]

		return(
			<div>
				<h2>Slider</h2>
				<h4>{JSON.stringify(current)} <button onClick={(e) => this.props.addItem(e, current)}>Add</button></h4>
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