import React from 'react'
import { Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import _ from 'lodash'

import './Cart.css';
import {Icon} from 'react-fa'

class Cart extends React.Component {
	constructor(props){
		super(props)
		this.model = this.props.cart.form
	}

	updateLocalModel(propName, value){
		this.model[propName] = value
		this.props.updateForm(this.modal)
	}

	render(){
		const cart = this.props.cart
		const counter = (cart.items.length) ? _.sumBy(cart.items, 'quantity') : 0
		const total = (cart.items.length) ? _.sumBy(cart.items, i => i.quantity*i.price) : 0

		return(
			<div>
				<div className="pull-right text-right mx-4 my-4">
					<a className="cart-link no-decoration" onClick={this.props.toggleCartModal}>
						<Icon name="shopping-cart" size="2x"><span className="counter text-center">{counter}</span></Icon>
					</a>
				</div>

				<Modal isOpen={cart.opened} size="lg" toggle={this.props.toggleCartModal} backdrop={true}>
		          <ModalHeader toggle={this.props.toggleCartModal}>Корзина</ModalHeader>
		          <ModalBody>
		        	<div className="row">
			        	<div className="col-md-6 col-sm-12">
			        		<form className="px-2">
			        			<label>ФИО</label>
			        			<div className="form-group" name="name">
			        				<input type="text" className="form-control" value={this.model.name} onChange={e => this.updateLocalModel('name', e.target.value)}/>
			        			</div>

			        			<label>E-mail</label>
			        			<div className="form-group" name="e-mail">
			        				<input type="e-mail" className="form-control" value={this.model.email} onChange={e => this.updateLocalModel('email', e.target.value)} />
			        			</div>

			        			<label>Телефон</label>
			        			<div className="form-group" name="phone-number">
			        				<input type="text" className="form-control" value={this.model.phone} onChange={e => this.updateLocalModel('phone', e.target.value)} />
			        			</div>

			        			<label>Способ доставки</label>
			        			<div className="form-group" name="shipping">
			        				<select type="text" className="form-control" value={this.model.shipping} onChange={e => this.updateLocalModel('shipping', Number(e.target.value))}>
			        					{cart.shippingTypes.map((type, i)=>{
			        						return <option key={i} value={i}>{type.name}</option>
			        					})}
			        				</select>
			        			</div>

			        			<label>Способ оплаты</label>
			        			<div className="form-group" name="pay-type">
			        				<select type="text" className="form-control" value={this.model.payment} onChange={e => this.updateLocalModel('payment', Number(e.target.value))}>
			        					{cart.paymentTypes.map((type, i)=>{
			        						return <option key={i} value={i}>{type.name}</option>
			        					})}
			        				</select>
			        			</div>
			        		</form>
			        	</div>
			        	<div className="col-md-6 col-sm-12 align-self-center">
				        	<div className="mx-0 my-3 p-0">
					        	{cart.items.length>0 ? (
					        		<div className="mx-2 p-0">
					        			<label>Ваш заказ:</label>
							        	<ul>
							        		{cart.items.map((item, i) => {
							        			return(
							        				<li key={i}>
							        					<strong>{item.name}</strong> ({item.quantity} по {item.price} грн.) 
							        					<a onClick={(e) => this.props.removeItem(e, i)} className="ml-2"><Icon name="times" /></a>
							        				</li>
							        			)
							        		})}
							        	</ul>
							        	<h4 className="ml-1">Итого: {total} грн.</h4>
						        	</div>
						        ) : (
						        	<h4 className="text-center my-2">Корзина пуста</h4>
						        )}
						    </div>
						</div>
					</div>
		          </ModalBody>
		          <ModalFooter>
		          	<div className="row">
		          		<div className="col">
		          			{JSON.stringify(this.model)}
		          		</div>
		          		<div className="col">
		          			<button className="btn btn-default" disabled={cart.items.length === 0}>Отправить заказ</button>
		          		</div>
		          	</div>
		          </ModalFooter>
		        </Modal>
			</div>
		)
	}
}
export default Cart