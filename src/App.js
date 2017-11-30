import React from 'react';
import {SectionsContainer, Section, Header, Footer} from 'react-fullpage';
import _ from 'lodash'
import './App.css';

import MainMenu from './components/MainMenu/MainMenu'
import Cart from './components/Cart/Cart'
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
      cart: {
        items: []
      },
      test: {
        queue: {questionText: 'What?', answers: [
            {answerText: 'sdavwfds', questionText: 'What?', answers: [
              {answerText: 'sdav wvw s', questionText: 'What?', resultIndex: 3},
              {answerText: 'sdavds', questionText: 'What?', resultIndex: 3}
            ]}, 
            {answerText: 'sdaewfvd. s', questionText: 'Wha st?', answers: [
              {answerText: 'sc fdvdavds', questionText: 'Whatds ', resultIndex: 3},
              {answerText: 'sda cdvdw ccvds', questionText: 'Wds hat?', resultIndex: 3}
            ]}, 
            {answerText: 'sda svd3434 s', questionText: 'Whads t?', answers: [
              {answerText: 'sda cdvds', questionText: 'What sd?', resultIndex: 3},
              {answerText: 'sddscavds', questionText: 'Whads t?', resultIndex: 3}
            ]}, 
            {answerText: 'sdawefe 34 34vds', questionText: 'What?', answers: [
              {answerText: 'sdadsvvds', questionText: 'What?', resultIndex: 3},
              {answerText: 'sdav svds', questionText: 'What?', resultIndex: 3}
            ]}, 
        ]},
        queueIndex: [],
        results: [
          {name: 'habvfd43453b', descr: 'dsfhdfhdfh fds hkdf kdsf', itemIndex: 0},
          {name: '23532ewwetew', descr: 'dsfhdfhdfh fds hkdf kjnk j j biudsf', itemIndex: 1},
          {name: '2532ew', descr: 'dsfhdfhdfh fds hkkjnk j j biudsf', itemIndex: 2},
          {name: '23532eew', descr: 'dsfhdfhdfh  j j biudsf', itemIndex: 3},
        ],
        winnerIndex: null,
        finished: false
      }
    }

class App extends React.Component {
  constructor(props){
    super(props)
    this.state = initialState
    this.chooseItem = this.chooseItem.bind(this)
    this.addItem = this.addItem.bind(this)
    this.giveAnswer = this.giveAnswer.bind(this)
  }

  // slider methods
  chooseItem(e, i){
    let catalog = {...this.state.catalog}
    catalog.currentIndex = i
    this.setState({catalog})
  }

  // cart methods
  addItem(e, item){
    let cart = {...this.state.cart}
    cart.items.push(item)
    this.setState({cart})
  }

  // test methods
  giveAnswer(e, answer){
    let test = {...this.state.test}

    if(answer.resultIndex){ // if this queue level have result
      test.winnerIndex = answer.resultIndex // then finishing
      test.finished = true
    } else {
      test.queue = answer // or getting to next queue level
    }

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
    const {catalog, cart, test} = this.state

    return (
      <div>
        <Header>
            <MainMenu />
            <Cart cart={cart} />
        </Header>
        <Footer>
          <a href="">Next</a>
        </Footer>
        <SectionsContainer className="container" {...options}>
          <Section verticalAlign="true">Main</Section>
          <Section verticalAlign="true">
            <Slider catalog={catalog} chooseItem={this.chooseItem} addItem={this.addItem} />
          </Section>
          <Section verticalAlign="true">
            <Test test={test} giveAnswer={this.giveAnswer} />
          </Section>
          <Section verticalAlign="true">About</Section>
        </SectionsContainer>
      </div>
    );
  }
}

export default App;
