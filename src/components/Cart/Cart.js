import React from 'react'
import ReactModal from 'react-modal'
import _ from 'lodash'

ReactModal.setAppElement('#root');

class Cart extends React.Component {
	render(){
		const cart = this.props.cart
		const counter = (cart.items.length) ? _.sumBy(cart.items, 'quantity') : 0
		const total = (cart.items.length) ? _.sumBy(cart.items, i => i.quantity*i.price) : 0

		return(
			<div className="text-right my-2 mx-4">
				<p><a onClick={this.props.toggleCartModal}>Корзина ({counter})</a></p>

				<ReactModal 
		           isOpen={cart.opened}
		           contentLabel="Корзина"
		        >
		        	{cart.items.length>0 ? (
		        		<div>
				        	<ul>
				        		{cart.items.map((item, i) => {
				        			return(
				        				<li key={i}>
				        					{item.name} ({item.quantity} по {item.price} грн.) 
				        					<a onClick={(e) => this.props.removeItem(e, i)}>X</a>
				        				</li>
				        			)
				        		})}
				        	</ul>
				        	<h4>{total} грн.</h4>
			        	</div>
			        ) : (
			        	<h2>Корзина пуста</h2>
			        )}
			        <button onClick={this.props.toggleCartModal}>Закрыть</button>
        		</ReactModal>
			</div>
		)
	}
}
export default Cart