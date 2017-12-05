import React from 'react'

import { Accordion, AccordionItem, AccordionItemTitle, AccordionItemBody } from 'react-accessible-accordion'
import 'react-accessible-accordion/dist/react-accessible-accordion.css'

import './Details.css'
import {Icon} from 'react-fa'

const Details = () => {
	return( 
		<div className="container">
			<div className="row about">
				<p>В ситуации, где счет идет на секунды, для спасения жизни человека должны объединиться два фактора: навыки первой помощи и снаряжение для ее оказания.</p>
				<p>Reskits созданы для того, чтобы необходимое снаряжение попало в правильные руки вовремя.</p>
				<p>Мы объединили современные стандарты первой помощи, практический опыт, оценку потребностей и ограничений горожан. Так мы разработали простые, практичные, удобные, современные наборы для спасения жизни.</p>
			</div>
			<div className="row points my-3 ml-4">
				<Accordion>
				    <AccordionItem expanded>
				        <AccordionItemTitle>
				            <h3><Icon name="plus" /> Созданы для города</h3>
				        </AccordionItemTitle>
				        <AccordionItemBody>
				            <p>Reskits предназначены для использования в городской среде.</p>
				        </AccordionItemBody>
				    </AccordionItem>
				    <AccordionItem>
				        <AccordionItemTitle>
				            <h3><Icon name="plus" /> Удобно хранить и транспортировать</h3>
				        </AccordionItemTitle>
				        <AccordionItemBody>
				            <p>Reskits представлены в двух видах упаковки: в вакуумной и функциональных чехлах из Cordura 1000D.</p>
				        </AccordionItemBody>
				    </AccordionItem>
				    <AccordionItem>
				        <AccordionItemTitle>
				            <h3><Icon name="plus" /> Правильное наполнение</h3>
				        </AccordionItemTitle>
				        <AccordionItemBody>
				            <p>При выборе снаряжения использовались международные стандарты первой помощи и практический опыт спасения жизни.</p>
				        </AccordionItemBody>
				    </AccordionItem>
				    <AccordionItem>
				        <AccordionItemTitle>
				            <h3><Icon name="plus" /> Жизненно-важный подарок</h3>
				        </AccordionItemTitle>
				        <AccordionItemBody>
				            <p>Мы верим, что подарить Reskits значит проявить заботу о жизни и здоровье близких людей и коллег.</p>
				        </AccordionItemBody>
				    </AccordionItem>
				</Accordion>
			</div>
		</div>
    )
}
export default Details