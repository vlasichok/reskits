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
				<div className="row">
					<div className="col-10 offset-1 text-center">
						{finished ? (
							<div>
								<h4>
									{ winner.itemIndex !== undefined && <span>Вам подойдет </span>} 
									{winner.name}
								</h4>
								{ winner.itemIndex !== undefined &&
									<button className="btn btn-light m-1" onClick={(e)=> this.props.goToResult(e, winner.itemIndex)}>Узнать подробнее</button>
								}
							</div>
						) : (
							<div>
								<h3 className="question mb-3">{currentQuestion.questionText}</h3>
								<ul className="answers p-0 m-0">
									{currentQuestion.answers.map((answer, i) => {
										return(
											<li key={i}><button className="btn btn-light m-1" onClick={(e) => this.props.giveAnswer(e, answer)}>{answer.answerText}</button></li>
										)
									})}
								</ul>
							</div>
						)}
					</div>
				</div>
				<p className="text-center mt-2"><Icon name="refresh" /><a onClick={(e) => this.props.restartTest(e)} className="ml-2">Начать заново</a></p>
			</div>
		)
	}
}
export default Test