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
				        	<div className="row mt-2">
				            	<div className="icon col-2 col-sm-1 text-center"><Icon name="plus" size="2x" /></div>
				            	<div className="title col-10 col-sm-11"><h3>Созданы для города</h3></div>
				        	</div>
				        </AccordionItemTitle>
				        <AccordionItemBody>
				        	<div className="row">
				            	<div className="descr col-10 offset-2 col-sm-11 offset-sm-1"><p>Reskits предназначены для использования в городской среде.</p></div>
				        	</div>
				        </AccordionItemBody>
				    </AccordionItem>
				    <AccordionItem>
				        <AccordionItemTitle>
				        	<div className="row mt-2">
				            	<div className="icon col-2 col-sm-1 text-center"><Icon name="plus" size="2x" /></div>
				            	<div className="title col-10 col-sm-11"><h4>Удобно хранить и транспортировать</h4></div>
				        	</div>
				        </AccordionItemTitle>
				        <AccordionItemBody>
				        	<div className="row">
				            	<div className="descr col-10 offset-2 col-sm-11 offset-sm-1"><p>Reskits представлены в двух видах упаковки: в вакуумной и функциональных чехлах из Cordura 1000D.</p></div>
				        	</div>
				        </AccordionItemBody>
				    </AccordionItem>
				    <AccordionItem>
				        <AccordionItemTitle>
				        	<div className="row mt-2">
				            	<div className="icon col-2 col-sm-1 text-center"><Icon name="plus" size="2x" /></div>
				            	<div className="title col-10 col-sm-11"><h3>Правильное наполнение</h3></div>
				        	</div>
				        </AccordionItemTitle>
				        <AccordionItemBody>
				        	<div className="row">
				            	<div className="descr col-10 offset-2 col-sm-11 offset-sm-1"><p>При выборе снаряжения использовались международные стандарты первой помощи и практический опыт спасения жизни.</p></div>
				        	</div>
				        </AccordionItemBody>
				    </AccordionItem>
				    <AccordionItem>
				        <AccordionItemTitle>
				        	<div className="row mt-2">
				            	<div className="icon col-2 col-sm-1 text-center"><Icon name="plus" size="2x" /></div>
				            	<div className="title col-10 col-sm-11"><h3>Жизненно-важный подарок</h3></div>
				        	</div>
				        </AccordionItemTitle>
				        <AccordionItemBody>
				        	<div className="row">
				            	<div className="descr col-10 offset-2 col-sm-11 offset-sm-1"><p>Мы верим, что подарить Reskits значит проявить заботу о жизни и здоровье близких людей и коллег.</p></div>
				        	</div>
				        </AccordionItemBody>
				    </AccordionItem>
				</Accordion>
			</div>
		</div>
    )
}
export default Details