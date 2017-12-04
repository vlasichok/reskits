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
			<div>
				<div className="pull-right text-right mx-4 my-4">
					<a className="cart-link" onClick={this.props.toggleCartModal}>
						<Icon name="shopping-cart" size="2x" /> ({counter})
					</a>
				</div>

				<Modal isOpen={cart.opened} size="lg" toggle={this.toggle} className={this.props.className}>
		          <ModalHeader toggle={this.props.toggleCartModal}>Корзина</ModalHeader>
		          <ModalBody>
		        	<div className="row">
			        	<div className="col-md-6 col-sm-12">
			        		<form class="px-2">
			        			<label for="name">ФИО</label>
			        			<div className="form-group" name="name">
			        				<input type="text" className="form-control" />
			        			</div>

			        			<label for="e-mail">E-mail</label>
			        			<div className="form-group" name="e-mail">
			        				<input type="e-mail" className="form-control" />
			        			</div>

			        			<label for="phone-number">Телефон</label>
			        			<div className="form-group" name="phone-number">
			        				<input type="text" className="form-control" />
			        			</div>

			        			<label for="shipping">Способ доставки</label>
			        			<div className="form-group" name="shipping">
			        				<input type="text" className="form-control" />
			        			</div>

			        			<label for="pay-type">Способ оплаты</label>
			        			<div className="form-group" name="pay-type">
			        				<input type="text" className="form-control" />
			        			</div>
			        		</form>
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
		          	<button className="btn btn-default">Отправить заказ</button>
		          </ModalFooter>
		        </Modal>
			</div>
		)
	}
}
export default Cart