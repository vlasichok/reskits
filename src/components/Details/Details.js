import React from 'react'

import { Collapse } from 'reactstrap';

import './Details.css'
import {Icon} from 'react-fa'

const Details = (props) => {
	return( 
		<div className="container-fluid details">
			<div className="row">
				<div className="col-lg-4 col-xl-5 d-none d-lg-block">
					<div className="bgr-photo">
						<div className="bgr-snake"></div>
					</div>
				</div>
				<div className="col-12 col-lg-8 col-xl-7 bgr-color d-flex align-items-center">
					<div className="details-list w-100">
						{props.items.map((item, i) => {
							return(
							    <div key={i} className="col-12 col-md-10 offset-md-1 col-lg-12 mt-2">
						        	<div className="row mt-2">
						            	<div className="icon col-3 col-md-2 col-lg-1 text-right"><Icon name={item.icon} size="2x" /></div>
						            	<div className="col-9 col-md-10 col-xl-8">
						            		<h4 className="title"><a onClick={(e) => props.toggleCollapse(e, i)}>{item.title}</a></h4>
						            	</div>
						        	</div>
							        <Collapse isOpen={item.expanded}>
							        	<div className="row">
							            	<div className="descr col-9 offset-3 col-md-10 offset-md-2 col-xl-7 offset-lg-1"><p>{item.text}</p></div>
							        	</div>
							        </Collapse>
							    </div>
						    )
						})}
					</div>
				</div>
			</div>
		</div>
    )
}
export default Details