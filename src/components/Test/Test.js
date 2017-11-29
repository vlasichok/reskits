import React from 'react'

class Test extends React.Component {
	render(){
		return(
			<div>
				<h2>Test</h2>
				<p>{this.props.test.questions[0].text}</p>
				<ul>
					{this.props.test.questions[0].answers.map((answer, i) => {
						return(
							<li key={i}>{answer.text}</li>
						)
					})}
				</ul>
			</div>
		)
	}
}
export default Test