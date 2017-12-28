import React from 'react'
import { Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import _ from 'lodash'
import $ from 'jquery'

import CartForm from './CartForm.js'
import CartList from './CartList.js'

import './Cart.css'
import {Icon} from 'react-fa'

class Cart extends React.Component {
	constructor(props){
		super(props)
		this.model = this.props.cart.form

		this.updateLocalModel = this.updateLocalModel.bind(this)
		this.sendOrder = this.sendOrder.bind(this)
	}

	updateLocalModel(propName, value){
		this.model[propName] = value
		this.props.updateForm(this.modal)
	}
	sendOrder(){
		$.ajax({
		  url: "https://docs.google.com/forms/d/e/1FAIpQLSffYX9gCJGfgsGtBrLcrKGftPN6rrh39mbpgJqGbzqCe78b9A/formResponse",
		  data: { 
		  	"entry.1437398298": this.model.name,
		  	"entry.1441256141": this.model.email
		  },
		  type: "POST",
		  dataType: "xml"
		})
	}

	render(){
		const cart = this.props.cart
		const counter = (cart.items.length) ? _.sumBy(cart.items, 'quantity') : 0
		const total = (cart.items.length) ? _.sumBy(cart.items, i => i.quantity*i.price) : 0

		return(
			<div>
				<div className="pull-right text-right ml-3 mr-4 mr-sm-5 my-3 my-sm-4">
					<a className={ (!cart.animateCounter) ? 'cart-link no-decoration' : 'cart-link no-decoration cart-link--animation'} onClick={this.props.toggleCartModal}>
						<Icon name="shopping-cart" size="2x"><span className="counter text-center">{counter}</span></Icon>
					</a>
				</div>

				<Modal isOpen={cart.opened} size="lg" toggle={this.props.toggleCartModal} backdrop={true}>
		          <ModalHeader toggle={this.props.toggleCartModal}>Корзина</ModalHeader>
		          <ModalBody>
		        	<div className="row">
			        	<div className="col-12 col-lg-6">
			        		<CartForm model={this.model} paymentTypes={cart.paymentTypes} shippingTypes={cart.shippingTypes} NPCities={cart.NPCities} NPWarehouses={cart.NPWarehouses} updateLocalModel={this.updateLocalModel} loadNPCities={this.props.loadNPCities} loadNPWarehouses={this.props.loadNPWarehouses} />
			        	</div>
			        	<div className="col-12 col-lg-6 align-self-center">
				        	<div className="mx-0 my-3 p-0">
				        		<CartList items={cart.items} total={total} changeQuantity={this.props.changeQuantity} removeItem={this.props.removeItem} />
						    </div>
						</div>
					</div>
		          </ModalBody>
		          <ModalFooter>
		          	<div className="row">
		          		<div className="col">

		          		</div>
		          		<div className="col">
		          			<button className="btn btn-default" onClick={this.sendOrder} disabled={cart.items.length === 0}>Отправить заказ</button>
		          		</div>
		          	</div>
		          </ModalFooter>
		        </Modal>
			</div>
		)
	}
}
export default Cart