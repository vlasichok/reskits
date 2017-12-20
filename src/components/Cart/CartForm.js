import React from 'react'
import Select from 'react-select';
import 'react-select/dist/react-select.css';

class CartForm extends React.Component {
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
				      <Select
				        name="shipping"
				        value={this.props.model.shipping}
				        clearable={false}
				        onChange={selectedOption => this.props.updateLocalModel('shipping', selectedOption.value)}
				        options={this.props.shippingTypes.map((type, i)=>{
							return {value: i, label: type.name}
						})}
				      />
				</div>

				{(this.props.model.shipping === 1 || this.props.model.shipping === 2) &&
					<div>
						<div>
							<label>Ваш город</label>
							<div className="form-group" name="shippingCity">
								<Select
									name="NPCity"
									value={this.props.model.NPCity}
									clearable={false}
									onInputChange={input => {
										this.props.loadNPCities(input)
									}}
									onChange={selectedOption => {
										this.props.updateLocalModel('NPCity', selectedOption)
										this.props.loadNPWarehouses(selectedOption.label)
									}}
									options={this.props.NPCities.map((city, i)=>{
										return {value: i, label: city.Description}
									})}
								/>
							</div>
						</div>
					</div>
				}

				{(this.props.model.shipping === 1 && this.props.model.NPCity) &&
					<div>
						<label>Ваше отделение</label>

						{(this.props.NPWarehouses && this.props.NPWarehouses.length) ? ( 
							<div className="form-group" name="shippingWarehouse">
								<Select
									name="NPWarehouse"
									value={this.props.model.NPWarehouse}
									clearable={false}
									onChange={selectedOption => this.props.updateLocalModel('NPWarehouse', selectedOption)}
									options={this.props.NPWarehouses.map((warehouse, i)=>{
										return {value: i, label: warehouse.Description}
									})}
								/>
							</div>
						):(
							<input type="text" className="form-control" value={this.props.model.NPWarehouse} onChange={e => { this.props.updateLocalModel('NPWarehouse', e.target.value)}} />
						)}
					</div>
				}

				{(this.props.model.shipping === 2) &&
					<div>
						<label>Ваш адрес</label>
						<div className="form-group" name="shippingAdress">
							<input type="text" className="form-control" value={this.props.model.NPAdress} onChange={e => { this.props.updateLocalModel('NPAdress', e.target.value)}} />
						</div>
					</div>
				}

				<label>Способ оплаты</label>
				<div className="form-group" name="pay-type">
					<Select
						name="payment"
						value={this.props.model.payment}
						clearable={false}
						onChange={selectedOption => this.props.updateLocalModel('payment', selectedOption.value)}
						options={this.props.paymentTypes.map((type, i)=>{
							return {value: i, label: type.name}
						})}
					/>
				</div>
			</form>
		)
	}
}

export default CartForm