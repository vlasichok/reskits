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
		this.items = this.props.cart.items

		this.updateLocalModel = this.updateLocalModel.bind(this)
		this.sendOrder = this.sendOrder.bind(this)
	}

	updateLocalModel(propName, value){
		this.model[propName] = value
		this.props.updateForm(this.modal)
	}
	itemsToString(items){
		let itemStrings = []
		for(let i = 0; i < items.length; i++) {
			let name = items[i].name
			let color = items[i].colors[items[i].currColorIndex]
			let quantity = items[i].quantity

			let itemString = `${i+1}) ${name} (${color}) = ${quantity} шт`
			itemStrings.push(itemString)
		}
		return itemStrings.join(',\n')
	}
	sendOrder(){
		$.ajax({
		  url: "https://docs.google.com/forms/d/e/1FAIpQLSffYX9gCJGfgsGtBrLcrKGftPN6rrh39mbpgJqGbzqCe78b9A/formResponse",
		  data: {
		  	"entry.1437398298": this.model.name,
		  	"entry.1441256141": this.model.email,
        	"entry.1516772474": this.model.phone,
        	"entry.1115901129": this.model.shipping,
        	"entry.266198164": (this.model.NPCity && this.model.NPCity.label) ? this.model.NPCity.label : '',
        	"entry.286738280": (this.model.NPWarehouse && this.model.NPWarehouse.label) ? this.model.NPWarehouse.label : '',
        	"entry.1969539833": this.model.NPAdress,
        	"entry.1032598905": this.model.payment,
        	"entry.808755815": this.itemsToString(this.items)
		  },
		  type: "POST",
		  dataType: "xml",
			statusCode: {
        0: function (){
          console.log('success')
        },
        200: function (){
          console.log('success')
        }
			}
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