import React from 'react'

class Test extends React.Component {
	render(){
		const currentIndex = this.props.test.current
		const questions = this.props.test.questions
		const currentQuestion = questions[currentIndex]

		return(
			<div>
				<h2>Test</h2>
				<p>{currentQuestion.text} ({currentIndex})</p>
				<ul>
					{currentQuestion.answers.map((answer, i) => {
						return(
							<li key={i} onClick={(e) => this.props.getAnswer(e, i)}>{answer.text}</li>
						)
					})}
				</ul>
			</div>
		)
	}
}
export default Test