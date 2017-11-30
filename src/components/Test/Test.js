import React from 'react'

class Test extends React.Component {
	render(){
		const currentIndex = this.props.test.current
		const questions = this.props.test.questions
		const results = this.props.test.results
		const currentQuestion = questions[currentIndex]
		const finished = this.props.test.finished
		const winner = this.props.findWinner(results)

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
						<p>{currentQuestion.text} ({currentIndex})</p>
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