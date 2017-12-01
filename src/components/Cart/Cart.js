import React from 'react'

class Cart extends React.Component {
	render(){
		const cart = this.props.cart

		return(
			<div className="text-right my-2 mx-4">
				<p>Корзина ({cart.items.length})</p>
			</div>
		)
	}
}
export default Cart