import React from 'react'

import { Accordion, AccordionItem, AccordionItemTitle, AccordionItemBody } from 'react-accessible-accordion'
import 'react-accessible-accordion/dist/react-accessible-accordion.css'

import {Icon} from 'react-fa'

const Details = () => {
	return( 
		<Accordion>
		    <AccordionItem>
		        <AccordionItemTitle>
		            <h3>Оплата</h3>
		        </AccordionItemTitle>
		        <AccordionItemBody>
		            <p>
		                Оплата
		            </p>
		        </AccordionItemBody>
		    </AccordionItem>
		    <AccordionItem>
		        <AccordionItemTitle>
		            <h3>Доставка</h3>
		            <div>
		            	<Icon name="rocket" />Подробности доставки
		            </div>
		        </AccordionItemTitle>
		        <AccordionItemBody>
		            <p>
		                <Icon spin name="spinner" /> Много подробностей доставки
		            </p>
		        </AccordionItemBody>
		    </AccordionItem>
		</Accordion>
    )
}
export default Details