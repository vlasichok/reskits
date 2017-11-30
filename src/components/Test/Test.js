import React from 'react'

class Test extends React.Component {
	render(){
		const {questions, results, finished, currentIndex} = this.props.test,
		      currentQuestion = questions[currentIndex],
		      winner = this.props.findWinner(results)

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
						<p>{currentQuestion.text} ({currentIndex+1} из {questions.length})</p>
						<ul>
							{currentQuestion.answers.map((answer, i) => {
								return(
									<li key={i} onClick={(e) => this.props.addAnswer(e, answer.link)}>{answer.text}</li>
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