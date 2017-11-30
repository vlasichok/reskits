import React from 'react'

class Test extends React.Component {
	render(){
		const {queue, queueIndex, winnerIndex, results, finished} = this.props.test,
		      currentQuestion = queue,
		      winner = results[winnerIndex]

		return(
			<div>
				<h2>Test</h2>
				{finished ? (
					<div>
						<h4>{winner.name}</h4>
						<p>{winner.descr}</p>
					</div>
				) : (
					<div>
						<p>{currentQuestion.questionText} ({queueIndex.length})</p>
						<ul>
							{currentQuestion.answers.map((answer, i) => {
								return(
									<li key={i} onClick={(e) => this.props.giveAnswer(e, answer)}>{answer.answerText}</li>
								)
							})}
						</ul>
					</div>
				)}
			</div>
		)
	}
}
export default Test