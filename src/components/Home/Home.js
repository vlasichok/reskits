import React from 'react'
import './Home.css'
import { Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap'
import HomeCompanyForm from './HomeCompanyForm.js'

const Home = props => {
	return(
		<div className="container home">
			<div className="row mb-2">
				<div className="col-12 col-md-10 col-lg-8 offset-md-1 offset-lg-2">
					<p className="slogan text-center"><span className="title h2">Reskits — современные наборы первой помощи для жителей крупных городов.</span> Набор поможет спасти жизнь в экстренной ситуации. В случайной ситуации, на работе или отдыхе. Выбери свой Reskit!</p>
					<div className="text-center mt-4">
						<a href='#catalog' className="no-decoration"><button className="btn btn-light m-1">Смотреть наборы</button></a>
						<a href='#test' className="no-decoration"><button className="btn btn-light m-1">Подобрать набор</button></a>
					</div>
					<div className="text-center mt-1">
						<a onClick={props.toggleCompanyModal}>Связь для компаний</a>
					</div>
				</div>
			</div>
			<Modal isOpen={props.companyForm.opened} size="md" toggle={props.toggleCompanyModal} backdrop={true} className="companyModal">
				<ModalHeader toggle={props.toggleCompanyModal}>Для компаний</ModalHeader>
				<ModalBody>
					{(props.companyForm.messageSent) ? (
						<p className="h5 text-center m-3">Спасибо, ваше сообщение отправлено.<br/>Мы свяжемся с вами в ближайшее время.</p>
					) : (
						<HomeCompanyForm form={props.companyForm.form}
							updateCompanyFormValue={props.updateCompanyFormValue} 
							formatPhoneNumber={props.formatPhoneNumber} />
					)}
				</ModalBody>
				<ModalFooter>
					<div className="row">
		          		<div className="col-12 col-sm-8">
							<div className="errorMessage d-flex align-items-center mb-3 mb-sm-0">
								{props.companyForm.errorMessage}
							</div>
		          		</div>
		          		<div className="col-12 col-sm-4 text-left text-sm-right">
						  <button className="btn btn-default" onClick={() => props.sendCompanyMessage(props.companyForm.form)} disabled={props.companyForm.messageSent}>Отправить</button>
						</div>
		          	</div>
				</ModalFooter>
			</Modal>
		</div>
    )
}
export default Home