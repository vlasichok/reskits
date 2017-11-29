import React from 'react';
import {SectionsContainer, Section, Header, Footer} from 'react-fullpage';
import logo from './logo.svg';
import './App.css';

import MainMenu from './components/MainMenu/MainMenu'
import Slider from './components/Slider/Slider'
import Test from './components/Test/Test'

class App extends React.Component {
  constructor(props){
    super(props)
    this.state = {
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
          {text: 'What?', answers: [{text: 'sdavds', link: 1}, {text: 'adsgdsag', link: 1}, {text: 'sdgdsgsg', link: 0}, {text: 'asdgdsgsdg', link: 2}], linking: [0, 1, 2, 3]},
          {text: 'Why?', answers: [{text: 'sdsdfhs', link: 3}, {text: '4345436ag', link: 2}, {text: 'sd435345sg', link: 1}, {text: '345342gsdg', link: 0}], linking: [0, 1, 2, 3]}
        ],
        results: [
          {name: 'habvfd43453b', descr: 'dsfhdfhdfh fds hkdf kdsf', itemIndex: 0},
          {name: '23532ewwetew', descr: 'dsfhdfhdfh fds hkdf kjnk j j biudsf', itemIndex: 1},
        ],
        current: 0
      }
    }
    this.chooseItem = this.chooseItem.bind(this)
    this.getAnswer = this.getAnswer.bind(this)
  }

  // slider methods
  chooseItem(e, i){
    let catalog = {...this.state.catalog}
    catalog.currentIndex = i
    this.setState({catalog})
  }

  // test methods
  getAnswer(e, answerIndex){
    console.log(answerIndex)

    let test = {...this.state.test}
    test.current++
    this.setState({test})
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
            <Test test={test} getAnswer={this.getAnswer} />
          </Section>
          <Section verticalAlign="true">About</Section>
        </SectionsContainer>
      </div>
    );
  }
}

export default App;
