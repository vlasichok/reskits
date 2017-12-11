import React from 'react'
import {Icon} from 'react-fa'

const CartList = (props) => {
	return(
		<div>
			{props.items.length>0 ? (
				<div className="order-list mx-2 p-0">
					<label>Ваш заказ:</label>
		        	<table class="table table-striped table-sm">
		        		<tbody>
			        		{props.items.map((item, i) => {
			        			return(
			        				<tr key={i} className="pt-3">
			        					<td><strong>{item.name}</strong></td>
			        					<td>
			        						<button className="btn btn-secondary btn-sm py-0" onClick={() => props.changeQuantity(i, false)} disabled={item.quantity <= 1}>-</button>
			        						<span className="quantity">{item.quantity}</span>
			        						<button className="btn btn-secondary btn-sm py-0" onClick={() => props.changeQuantity(i, true)}>+</button>
			        					</td>
			        					<td className="text-right">{item.price*item.quantity} ₴</td>
			        					<td><a onClick={(e) => props.removeItem(e, i)} className="ml-2"><Icon name="times" /></a></td>
			        				</tr>
			        			)
			        		})}
		        		</tbody>
		        	</table>
		        	<h4 className="ml-1">Итого: {props.total} грн.</h4>
		    	</div>
		    ) : (
		    	<h4 className="text-center my-2">Корзина пуста</h4>
		    )}
	    </div>
	)
}

export default CartList