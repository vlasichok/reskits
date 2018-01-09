import React from 'react'
import Select from 'react-select';
import 'react-select/dist/react-select.css';

class CartForm extends React.Component {
	formatPhoneNumber(input){
			// Strip all characters from the input except digits, trim over 10 cars
	        input = input.replace(/\D/g,'').substring(0,10);

	        var size = input.length;
	        if(size < 4) {
	            input = '('+input;
	        } else if(size < 7) {
	            input = '('+input.substring(0,3)+') '+input.substring(3,6);
	        } else {
	            input = '('+input.substring(0,3)+') '+input.substring(3,6)+'-'+input.substring(6,8)+'-'+input.substring(8,10);
	        }
	        return input; 
	}
	render(){
		return(
			<form className="cart__form px-2">
				<label>ФИО</label>
				<div className="form-group" name="name" required>
					<input type="text" className="form-control" placeholder="Тарасенко Тарас Тарасович, например" value={this.props.model.name} onChange={e => this.props.updateLocalModel('name', e.target.value)}/>
				</div>

				<label>E-mail</label>
				<div className="form-group" name="e-mail" required>
					<input type="e-mail" className="form-control" placeholder="example@ukr.net" value={this.props.model.email} onChange={e => this.props.updateLocalModel('email', e.target.value)} />
				</div>

				<label>Телефон</label>
				<div className="form-group" name="phone-number" required>
					<input type="text" className="form-control" placeholder="(067) 123-45-67" value={this.props.model.phone} onChange={e => this.props.updateLocalModel('phone', this.formatPhoneNumber(e.target.value))} />
				</div>

				<label>Способ доставки</label>
				<div className="form-group" name="shipping">
				      <Select
				        name="shipping"
				        value={this.props.model.shipping}
				        clearable={false}
				        searchable={false}
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
									placeholder='Название города'
									noResultsText='Начните вводить название города'
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
									placeholder='Номер отделения'
									noResultsText='Отделение не найдено'
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
						searchable={false}
						placeholder=''
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