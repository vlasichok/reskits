import React from 'react'
import ReactModal from 'react-modal'
import _ from 'lodash'

ReactModal.setAppElement('#root');

class Cart extends React.Component {
	render(){
		const cart = this.props.cart
		const total = (cart.items.length) ? _.sumBy(cart.items, 'quantity') : 0

		return(
			<div className="text-right my-2 mx-4">
				<p><a onClick={this.props.toggleCartModal}>Корзина ({total})</a></p>

				<ReactModal 
		           isOpen={cart.opened}
		           contentLabel="Корзина"
		        >
		        	{cart.items.length>0 ? (
			        	<ul>
			        		{cart.items.map((item, i) => {
			        			return(
			        				<li key={i}>{item.name} - {item.quantity}</li>
			        			)
			        		})}
			        	</ul>
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