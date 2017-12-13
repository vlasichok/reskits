import React from 'react'

class CartForm extends React.Component {
	componentDidMount(){
		this.props.loadNPCities()
	}
	render(){
		return(
			<form className="px-2">
				<label>ФИО</label>
				<div className="form-group" name="name">
					<input type="text" className="form-control" value={this.props.model.name} onChange={e => this.props.updateLocalModel('name', e.target.value)}/>
				</div>

				<label>E-mail</label>
				<div className="form-group" name="e-mail">
					<input type="e-mail" className="form-control" value={this.props.model.email} onChange={e => this.props.updateLocalModel('email', e.target.value)} />
				</div>

				<label>Телефон</label>
				<div className="form-group" name="phone-number">
					<input type="text" className="form-control" value={this.props.model.phone} onChange={e => this.props.updateLocalModel('phone', e.target.value)} />
				</div>

				<label>Способ доставки</label>
				<div className="form-group" name="shipping">
					<select type="text" className="form-control" value={this.props.model.shipping} onChange={e => this.props.updateLocalModel('shipping', Number(e.target.value))}>
						{this.props.shippingTypes.map((type, i)=>{
							return <option key={i} value={i}>{type.name}</option>
						})}
					</select>
				</div>

				{(this.props.model.shipping === 0 || this.props.model.shipping === 1) &&
					<div>
						<label>Ваш город</label>
						<div className="form-group" name="shipping">
							<input type="text" className="form-control" value={this.props.model.NPCity} onChange={e => this.props.loadNPCities(e.target.value)} list="cityname" />
							<datalist id="cityname">
								{this.props.NPCities.map((city, i)=>{
									return <option key={i} value={city.MainDescription}></option>
								})}
							</datalist>
						</div>
					</div>
				}

				<label>Способ оплаты</label>
				<div className="form-group" name="pay-type">
					<select type="text" className="form-control" value={this.props.model.payment} onChange={e => this.props.updateLocalModel('payment', Number(e.target.value))}>
						{this.props.paymentTypes.map((type, i)=>{
							return <option key={i} value={i}>{type.name}</option>
						})}
					</select>
				</div>
			</form>
		)
	}
}

export default CartForm