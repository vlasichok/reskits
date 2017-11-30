import React from 'react';
import {SectionsContainer, Section, Header, Footer} from 'react-fullpage';
import _ from 'lodash'
import './App.css';

import MainMenu from './components/MainMenu/MainMenu'
import Slider from './components/Slider/Slider'
import Test from './components/Test/Test'

const initialState = {
      catalog: {
        items: [
          {name: 'AAAAAA'},
          {name: 'BB'},
          {name: 'CCC'},
          {name: 'DDDDD'},
          {name: 'EEE'}
        ],
        currentIndex: 0
      },
      test: {
        questions: [
          {text: 'What?', answers: [{text: 'sdavds', link: 1}, {text: 'adsgdsag', link: 1}, {text: '33sdgdsgsg', link: 3}, {text: 'asdgdsgsdg', link: 2}], linking: [0, 1, 2, 3]},
          {text: 'Why?', answers: [{text: 'sdsdfhs', link: 3}, {text: '4345436ag', link: 2}, {text: 'sd435345sg', link: 1}, {text: '345342gsdg', link: 0}], linking: [0, 1, 2, 3]}
        ],
        results: [
          {name: 'habvfd43453b', descr: 'dsfhdfhdfh fds hkdf kdsf', itemIndex: 0, count: 0},
          {name: '23532ewwetew', descr: 'dsfhdfhdfh fds hkdf kjnk j j biudsf', itemIndex: 1, count: 0},
          {name: '2532ew', descr: 'dsfhdfhdfh fds hkkjnk j j biudsf', itemIndex: 2, count: 0},
          {name: '23532eew', descr: 'dsfhdfhdfh  j j biudsf', itemIndex: 3, count: 0},
        ],
        currentIndex: 0,
        finished: false
      }
    }

class App extends React.Component {
  constructor(props){
    super(props)
    this.state = initialState
    this.chooseItem = this.chooseItem.bind(this)
    this.addAnswer = this.addAnswer.bind(this)
  }

  // slider methods
  chooseItem(e, i){
    let catalog = {...this.state.catalog}
    catalog.currentIndex = i
    this.setState({catalog})
  }

  // test methods
  addAnswer(e, answerIndex){
    let test = {...this.state.test}

    // adding points to apropriate result
    if(test.currentIndex <= test.questions.length-1) test.results[answerIndex].count++
    
    // going to the next question / finishing
    (test.currentIndex < test.questions.length-1) ? test.currentIndex++ : test.finished = true

    this.setState({test})
  }
  findWinner(results){
    return _.maxBy(results, 'count')
  }

  render() {
    let options = {
      sectionClassName:     'section',
      anchors:              ['main', 'catalog', 'test', 'about'],
      scrollBar:            false,
      navigation:           true,
      verticalAlign:        false,
      arrowNavigation:      true,
      scrollingSpeed:       400
    };
    const {catalog, test} = this.state

    return (
      <div>
        <Header>
            <MainMenu />
        </Header>
        <Footer>
          <a href="">Next</a>
        </Footer>
        <SectionsContainer className="container" {...options}>
          <Section verticalAlign="true">Main</Section>
          <Section verticalAlign="true">
            <Slider catalog={catalog} chooseItem={this.chooseItem} />
          </Section>
          <Section verticalAlign="true">
            <Test test={test} addAnswer={this.addAnswer} findWinner={this.findWinner} />
          </Section>
          <Section verticalAlign="true">About</Section>
        </SectionsContainer>
      </div>
    );
  }
}

export default App;
