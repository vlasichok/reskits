import React from 'react'

const CartForm = (props) => {
	return(
		<form className="px-2">
			<label>ФИО</label>
			<div className="form-group" name="name">
				<input type="text" className="form-control" value={props.model.name} onChange={e => props.updateLocalModel('name', e.target.value)}/>
			</div>

			<label>E-mail</label>
			<div className="form-group" name="e-mail">
				<input type="e-mail" className="form-control" value={props.model.email} onChange={e => props.updateLocalModel('email', e.target.value)} />
			</div>

			<label>Телефон</label>
			<div className="form-group" name="phone-number">
				<input type="text" className="form-control" value={props.model.phone} onChange={e => props.updateLocalModel('phone', e.target.value)} />
			</div>

			<label>Способ доставки</label>
			<div className="form-group" name="shipping">
				<select type="text" className="form-control" value={props.model.shipping} onChange={e => props.updateLocalModel('shipping', Number(e.target.value))}>
					{props.shippingTypes.map((type, i)=>{
						return <option key={i} value={i}>{type.name}</option>
					})}
				</select>
			</div>

			<label>Способ оплаты</label>
			<div className="form-group" name="pay-type">
				<select type="text" className="form-control" value={props.model.payment} onChange={e => props.updateLocalModel('payment', Number(e.target.value))}>
					{props.paymentTypes.map((type, i)=>{
						return <option key={i} value={i}>{type.name}</option>
					})}
				</select>
			</div>
		</form>
	)
}

export default CartForm