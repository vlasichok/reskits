import React from 'react'
import {Icon} from 'react-fa'

const SliderItems = props => {
	return(
		<div className="items mt-1">
			{props.catalog.items.map((item, i)=>{
				return(
					<div className="item m-1 m-sm-3" key={i} onClick={(e) => props.chooseItem(e, i)}>
						<div className="icon text-sm-center mx-3 m-sm-0"><Icon name={item.icon} size="2x" /></div>
						<h5 className="name text-sm-center">{item.name}</h5>
					</div>
				)
			})}
		</div>
	)
}
export default SliderItems