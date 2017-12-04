import React from 'react'
import { Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import _ from 'lodash'

import './Cart.css';
import {Icon} from 'react-fa'

class Cart extends React.Component {
	render(){
		const cart = this.props.cart
		const counter = (cart.items.length) ? _.sumBy(cart.items, 'quantity') : 0
		const total = (cart.items.length) ? _.sumBy(cart.items, i => i.quantity*i.price) : 0

		return(
			<div className="text-right my-2 mx-4">
				<p><a onClick={this.props.toggleCartModal}>Корзина ({counter})</a></p>

				<Modal isOpen={cart.opened} size="lg" toggle={this.toggle} className={this.props.className}>
		          <ModalHeader toggle={this.props.toggleCartModal}>Корзина</ModalHeader>
		          <ModalBody>
		        	<div className="row">
			        	<div className="col-md-6 col-sm-12">
			        		
			        	</div>
			        	<div className="col-md-6 col-sm-12 align-self-center">
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
					    </div>
					</div>
		          </ModalBody>
		          <ModalFooter>

		          </ModalFooter>
		        </Modal>
			</div>
		)
	}
}
export default Cart