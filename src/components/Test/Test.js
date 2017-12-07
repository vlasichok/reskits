import React from 'react'
import './Test.css'

import {Icon} from 'react-fa'

class Test extends React.Component {
	render(){
		const {queue, winnerIndex, results, finished} = this.props.test,
		      currentQuestion = queue,
		      winner = results[winnerIndex]

		return(
			<div className="container test">
				{finished ? (
					<div className="text-center">
						<h4>Вам подойдет {winner.name}</h4>
						<p>{winner.descr}</p>
					</div>
				) : (
					<div className="text-center">
						<h3>{currentQuestion.questionText}</h3>
						<ul className="answers p-0">
							{currentQuestion.answers.map((answer, i) => {
								return(
									<li><button className="btn btn-light m-1" key={i} onClick={(e) => this.props.giveAnswer(e, answer)}>{answer.answerText}</button></li>
								)
							})}
						</ul>
					</div>
				)}
				<p className="text-center"><Icon name="refresh" /><a onClick={(e) => this.props.restartTest(e)} className="ml-2">Начать заново</a></p>
			</div>
		)
	}
}
export default Test