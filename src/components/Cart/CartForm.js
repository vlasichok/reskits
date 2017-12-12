import React from 'react'
import $ from 'jquery'


class CartForm extends React.Component {
	componentDidMount(){
		$.ajax({
		    url: 'https://api.novaposhta.ua/v2.0/json/',
		    method: 'GET',
		    type: 'jsonp',
		    contentType: "application/json; charset=UTF-8",
		    data: {
				apiKey: "7314d0691ba990733c4a83182ca0354d",
				modelName: "Address",
				    calledMethod: "searchSettlements",
				    methodProperties: {
				        CityName: "Одеса",
				        Limit: 5
					}
			},
		    success: function(response){
		      console.log(response);
		    }
		});
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