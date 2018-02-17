import React from 'react'
import './Home.css'
import { Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap'

const Home = props => {
	return(
		<div className="container home">
			<div className="row mb-2">
				<div className="col-12 col-md-10 col-lg-8 offset-md-1 offset-lg-2">
					<p className="slogan text-center"><span className="title h2">Reskits — современные наборы первой помощи для жителей крупных городов.</span> Набор поможет тебе, коллеге или другу спасти жизнь в экстренной ситуации. Выбери свой Reskit!</p>
					<div className="text-center mt-4">
						<a href='#catalog' className="no-decoration"><button className="btn btn-light m-1">Смотреть наборы</button></a>
						<a href='#test' className="no-decoration"><button className="btn btn-light m-1">Подобрать набор</button></a>
						<a onClick={props.toggleCompanyModal} className="no-decoration"><button className="btn btn-light m-1">Для компания</button></a>
					</div>
				</div>
			</div>
			<Modal isOpen={props.companyForm.opened} size="lg" toggle={props.toggleCompanyModal} backdrop={true} className="companyModal">
				<ModalHeader toggle={props.toggleCompanyModal}>Для компаний</ModalHeader>
				<ModalBody>

				</ModalBody>
				<ModalFooter>
				</ModalFooter>
			</Modal>
		</div>
    )
}
export default Home