import React from 'react'

import { Accordion, AccordionItem, AccordionItemTitle, AccordionItemBody } from 'react-accessible-accordion'
import 'react-accessible-accordion/dist/react-accessible-accordion.css'

import './Details.css'
import {Icon} from 'react-fa'

const Details = () => {
	return( 
		<div className="container details">
			<div className="row points my-3 ml-4">
				<Accordion>
				    <AccordionItem expanded>
				        <AccordionItemTitle>
				        	<div className="pull-left mx-2 mt-1"><Icon name="plus" size="2x" /></div>
				            <div className="title"><h3>Созданы для города</h3></div>
				        </AccordionItemTitle>
				        <AccordionItemBody>
				            <p className="ml-4 pl-3">Reskits предназначены для использования в городской среде.</p>
				        </AccordionItemBody>
				    </AccordionItem>
				    <AccordionItem>
				        <AccordionItemTitle>
				            <div className="pull-left mx-2 mt-1"><Icon name="plus" size="2x" /></div>
				            <div className="title"><h3>Удобно хранить и транспортировать</h3></div>
				        </AccordionItemTitle>
				        <AccordionItemBody>
				            <p className="ml-4 pl-3">Reskits представлены в двух видах упаковки: в вакуумной и функциональных чехлах из Cordura 1000D.</p>
				        </AccordionItemBody>
				    </AccordionItem>
				    <AccordionItem>
				        <AccordionItemTitle>
				        	<div className="pull-left mx-2 mt-1"><Icon name="plus" size="2x" /></div>
				            <div className="title"><h3>Правильное наполнение</h3></div>
				        </AccordionItemTitle>
				        <AccordionItemBody>
				            <p className="ml-4 pl-3">При выборе снаряжения использовались международные стандарты первой помощи и практический опыт спасения жизни.</p>
				        </AccordionItemBody>
				    </AccordionItem>
				    <AccordionItem>
				        <AccordionItemTitle>
				        	<div className="pull-left mx-2 mt-1"><Icon name="plus" size="2x" /></div>
				            <div className="title"><h3>Жизненно-важный подарок</h3></div>
				        </AccordionItemTitle>
				        <AccordionItemBody>
				            <p className="ml-4 pl-3">Мы верим, что подарить Reskits значит проявить заботу о жизни и здоровье близких людей и коллег.</p>
				        </AccordionItemBody>
				    </AccordionItem>
				</Accordion>
			</div>
		</div>
    )
}
export default Details