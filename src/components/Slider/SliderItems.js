import React from 'react'
import {Icon} from 'react-fa'

const SliderItems = props => {
	return(
		<div>
			{(window.innerWidth > 575) ? (
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
			) : (
				<div className="items-mobile">
					<div className="row">
						<div className="col-2 p-3">
							<a className="left-step no-decoration ml-2"><Icon name="arrow-left" /></a>
						</div>
						<div className="col-8">
							<div className="row">
								<div className="col-4 text-center p-2">
									<div className="item">
										<div className="icon text-sm-center-xs"><Icon name="battery-full" /></div>
										<p className="name text-sm-center">Any scevw</p>
									</div>
								</div>
								<div className="col-4 text-center p-2">
									<div className="item">
										<div className="icon text-sm-center-xs"><Icon name="battery-full" /></div>
										<p className="name text-sm-center">Any mission</p>
									</div>
								</div>
								<div className="col-4 text-center p-2">
									<div className="item">
										<div className="icon text-sm-center-xs"><Icon name="battery-full" /></div>
										<p className="name text-sm-center">Ay ission</p>
									</div>
								</div>
							</div>
						</div>
						<div className="col-2 p-3">
							<a className="left-step no-decoration"><Icon name="arrow-right" /></a>
						</div>
					</div>
				</div>
			)}
		</div>
	)
}
export default SliderItems