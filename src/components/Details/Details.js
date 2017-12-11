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
					    <div className="col-10 offset-1 col-md-8 offset-md-2">
				        	<div className="row mt-2">
				            	<div className="icon col-2 col-sm-3 text-center text-md-right"><Icon name={item.icon} size="2x" /></div>
				            	<div className="title col-10 col-sm-8">
				            		<h3><a onClick={(e) => props.toggleCollapse(e, i)}>{item.title}</a></h3>
				            	</div>
				        	</div>
					        <Collapse isOpen={item.expanded}>
					        	<div className="row">
					            	<div className="descr col-9 offset-2 col-sm-7 offset-sm-3"><p>{item.text}</p></div>
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