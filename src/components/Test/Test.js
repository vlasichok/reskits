import React from 'react'

class Test extends React.Component {
	render(){
		const currentIndex = this.props.test.current
		const questions = this.props.test.questions
		const currentQuestion = questions[currentIndex]
		const finished = this.props.test.finished

		return(
			<div>
				<h2>Test</h2>
				<p>{currentQuestion.text} ({currentIndex})</p>
				<ul>
					{currentQuestion.answers.map((answer, i) => {
						return(
							<li key={i} onClick={(e) => this.props.addAnswer(e, answer.link)}>{answer.text}</li>
						)
					})}
				</ul>
				<p>{finished.toString()}</p>
			</div>
		)
	}
}
export default Test