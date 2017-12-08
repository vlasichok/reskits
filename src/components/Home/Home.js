import React from 'react'

const Home = () => {
	return(
		<div className="container text-center">
			<h2>Какой-то крутой слоган будет тут, пока не очень ясно какой, но какой-то будет.</h2>
			<div className="mt-3 text-center">
				<a href='#catalog' className="no-decoration"><button className="btn btn-light m-1">Смотреть каталог</button></a>
				<a href='#test' className="no-decoration"><button className="btn btn-light m-1">Подобрать аптечку</button></a>
			</div>
		</div>
    )
}
export default Home