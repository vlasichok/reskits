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
        queue: {questionText: 'Я выбираю аптечку ...', answers: [
            {answerText: 'себе', questionText: 'Я хочу чтобы ...', answers: [
              {answerText: 'аптечка была со мной в рюкзаке', questionText: 'По городу или в горы?', answers: [
                {answerText: 'По городу', questionText: 'Умеешь пользоваться турникетом/жгутом?', answers: [
                  {answerText: 'Да', questionText: 'Аптечка должна быть экономной?', answers: [
                    {answerText: 'Да', resultIndex: 3},
                    {answerText: 'Нет', resultIndex: 3}
                  ]},
                  {answerText: 'Нет', resultIndex: 3}
                ]},
                {answerText: 'В горы', resultIndex: 3},
              ]},
              {answerText: 'аптечка ездила со мной в машине', questionText: 'В ней должно быть все самое лучшее, верно?', answers: [
                {answerText: 'Конечно', resultIndex: 3},
                {answerText: 'Главное, чтобы работало', resultIndex: 3}
              ]},
              {answerText: 'аптечка находилась дома/в офисе', questionText: 'Полный комплект или попроще?', answers: [
                {answerText: 'Полный', resultIndex: 3},
                {answerText: 'Попроще', resultIndex: 3}
              ]}
            ]}, 
            {answerText: 'другу', questionText: 'Я рассчитываю потратить до ...', answers: [
              {answerText: '100 грн.', resultIndex: 3},
              {answerText: 'меньше 1500 грн.', questionText: 'Для меня важно ...', answers: [
                {answerText: 'внимание', resultIndex: 3},
                {answerText: 'чтобы просто, функционально и недорого', resultIndex: 3},
                {answerText: 'чтобы просто, функционально и очень качественно', resultIndex: 3}
              ]},
              {answerText: 'больше 1500 грн.', questionText: 'Друг водит машину?', answers: [
                {answerText: 'Да', questionText: 'У нас есть аптечка за ХХХХ гривен', answers: [
                  {answerText: 'Давайте поскромнее', resultIndex: 3},
                  {answerText: 'Для друга не жалко', resultIndex: 3}
                ]},
                {answerText: 'Нет', questionText: 'А в походы ходит?', answers: [
                  {answerText: 'Да', resultIndex: 3},
                  {answerText: 'Нет', questionText: 'Он городской супергерой?', answers: [
                    {answerText: 'Да', resultIndex: 3},
                    {answerText: 'Нет, он домашний супергерой', resultIndex: 3}
                  ]}
                ]}
              ]}
            ]}, 
            {answerText: 'в компанию', questionText: 'Whads t?', answers: [
              {answerText: 'Для безопасности, конечно', questionText: 'Безопасности чего?', answers: [
                {answerText: 'Безопасности на дороге', questionText: 'Безопасности чего?', answers: [
                  {answerText: 'Как всегда...', questionText: 'Безопасности чего?', resultIndex: 3},
                  {answerText: 'Нормально', resultIndex: 3},
                ]},
                {answerText: 'Безопасности офиса', resultIndex: 3},
                {answerText: 'Безопасности производства', resultIndex: 3}
              ]},
              {answerText: 'Для эмоций, конечно', questionText: 'У кого и какие эмоции должна вызывать?', answers: [
                {answerText: 'У многих коллег, подарим небольшие наборы', questionText: 'Как у нас с бюджетом?', answers: [
                  {answerText: 'Как всегда...', resultIndex: 3},
                  {answerText: 'Нормально', resultIndex: 3},
                  {answerText: 'Фантастика!', resultIndex: 3}
                ]},
                {answerText: 'Гордость у топ-менеджмента', resultIndex: 3},
                {answerText: 'Спокойствие и безопасности у босса', questionText: 'Как у нас с бюджетом?', answers: [
                  {answerText: 'Как всегда...', resultIndex: 3},
                  {answerText: 'Нормально!', resultIndex: 3}
                ]}
              ]}
            ]}
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
