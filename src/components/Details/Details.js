import React from 'react'

import { Collapse } from 'reactstrap';

import './Details.css'
import {Icon} from 'react-fa'

const Details = (props) => {
	return( 
		<div className="container details">
			<div className="row">
				{props.items.map((item, i) => {
					return(
					    <div key={i} className="col-12 col-lg-10 offset-lg-1 mt-2">
				        	<div className="row mt-2">
				            	<div className="icon col-3 text-right"><Icon name={item.icon} size="2x" /></div>
				            	<div className="col-9 col-lg-8">
				            		<h4 className="title"><a onClick={(e) => props.toggleCollapse(e, i)}>{item.title}</a></h4>
				            	</div>
				        	</div>
					        <Collapse isOpen={item.expanded}>
					        	<div className="row">
					            	<div className="descr col-9 offset-3 col-lg-7"><p>{item.text}</p></div>
					        	</div>
					        </Collapse>
					    </div>
				    )
				})}
			</div>
		</div>
    )
}
export default Details