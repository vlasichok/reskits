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
          {name: 'Urban Kit 1', descr: 'Людина втратила свідомість і не дихає, ви викликали швидку і починаєте реанімацію. Відмовитеся від вдихів або будете ризикувати здоров`ям, вдихаючи без бар`єру? \n Urban Kit 1 створений, щоб виключити подібний вибір. Маска-клапан і рукавички надійно захистять вас від можливого зараження інфекцією потерпілого, а плівка-клапан завжди буде з вами на брелоку від ключів.'},
          {name: 'Urban Kit 2', descr: 'Urban Kit 2 незамінний в ситуаціях, коли рахунок йде на хвилини. Його вміст дозволяє безпечно проводити реанімацію і зупинити критичну кровотечу кінцівки. \n Набір відповідає вимогам сучасного городянина — завдяки вакуумній упаковці він не займає багато місця і не зношується. \n Відмінністю Urban Kit 2 від Urban Kit 1 служить наявність в комплекті турнікета.'},
          {name: 'Urban Kit 2+', descr: 'Призначення Urban Kit 2+, як і Urban Kit 2 — врятувати життя при зупинці серця і критичній кровотечі кінцівки. Їх відмінність — в моделі турнікета та чохлі набору. \n До складу Urban Kit 2+ входить CAT G7 (Combat Application Tourniquet 7, останнього покоління). Збройні Сили США використовують CAT G7 тому, що результати досліджень підтверджують його високу ефективність, практичність і надійність. \n Urban Kit 2+ підходить для особистого використання, в якості подарунка, а також як елемент офісної, домашньої або мото аптечки.'},
          {name: 'Urban Full', descr: 'Full Urban Kit — ваша відповідь на комплексні виклики міського середовища. Вміст набору дозволяє своєчасно і безпечно надати допомогу при різних видах травм та невідкладних станів: зупинці серця, кровотечах, пораненнях грудини, переохолодженні. \n Основа набору — сучасне американське та ізраїльське спорядження. При його розробці, головним пріоритетом була якість комплектуючих, а не низька ціна. \n У набір також входить спорядження, необхідне для комфорту рятувальника - чохол, набір карток з рекомендаціями.'},
          {name: 'MVA Kit', descr: 'В Україні близько 4000 людей щорічно гине в ДТП. Врятувати їх життя та знизити шкоду здоров`ю можливо: своєчасно і правильно надавши їм першу допомогу. Набір MVA включає в себе спорядження, необхідне для порятунку життя потерпілого водія, пасажирів, збитого пішохода. \n Набір MVA містить засоби надання допомоги при кровотечах, переломах, вивихах, ударах. У нього включені засоби для проведення реанімації, а також для безпеки рятувальника: трикутник сповістить водіїв про перешкоду, а світловідбивний жилет зробить рятувальника помітним в темний час доби та погану погоду.'}
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
                    {answerText: 'Да', resultIndex: 1},
                    {answerText: 'Нет', resultIndex: 2}
                  ]},
                  {answerText: 'Нет', resultIndex: 0}
                ]},
                {answerText: 'В горы', resultIndex: 6},
              ]},
              {answerText: 'аптечка ездила со мной в машине', questionText: 'В ней должно быть все самое лучшее, верно?', answers: [
                {answerText: 'Конечно', resultIndex: 5},
                {answerText: 'Главное, чтобы работало', resultIndex: 4}
              ]},
              {answerText: 'аптечка находилась дома/в офисе', questionText: 'Полный комплект или попроще?', answers: [
                {answerText: 'Полный', resultIndex: 7},
                {answerText: 'Попроще', resultIndex: 3}
              ]}
            ]}, 
            {answerText: 'другу', questionText: 'Я рассчитываю потратить до ...', answers: [
              {answerText: '100 грн.', resultIndex: 8},
              {answerText: 'меньше 1500 грн.', questionText: 'Для меня важно ...', answers: [
                {answerText: 'внимание', resultIndex: 0},
                {answerText: 'чтобы просто, функционально и недорого', resultIndex: 2},
                {answerText: 'чтобы просто, функционально и очень качественно', resultIndex: 3}
              ]},
              {answerText: 'больше 1500 грн.', questionText: 'Друг водит машину?', answers: [
                {answerText: 'Да', questionText: 'У нас есть аптечка за ХХХХ гривен', answers: [
                  {answerText: 'Давайте поскромнее', resultIndex: 4},
                  {answerText: 'Для друга не жалко', resultIndex: 5}
                ]},
                {answerText: 'Нет', questionText: 'А в походы ходит?', answers: [
                  {answerText: 'Да', resultIndex: 6},
                  {answerText: 'Нет', questionText: 'Он городской супергерой?', answers: [
                    {answerText: 'Да', resultIndex: 3},
                    {answerText: 'Нет, он домашний супергерой', resultIndex: 7}
                  ]}
                ]}
              ]}
            ]}, 
            {answerText: 'в компанию', questionText: 'Аптечка нужна для ...', answers: [
              {answerText: 'Для безопасности, конечно', questionText: 'Безопасности чего?', answers: [
                {answerText: 'Безопасности на дороге', questionText: 'Как у вас с бюджетом?', answers: [
                  {answerText: 'Как всегда...', resultIndex: 4},
                  {answerText: 'Нормально', resultIndex: 5},
                ]},
                {answerText: 'Безопасности офиса', resultIndex: 7},
                {answerText: 'Безопасности производства', resultIndex: 7}
              ]},
              {answerText: 'Для эмоций, конечно', questionText: 'У кого и какие эмоции должна вызывать?', answers: [
                {answerText: 'У многих коллег, подарим небольшие наборы', questionText: 'Как у нас с бюджетом?', answers: [
                  {answerText: 'Как всегда...', resultIndex: 0},
                  {answerText: 'Нормально', resultIndex: 1},
                  {answerText: 'Фантастика!', resultIndex: 2}
                ]},
                {answerText: 'Гордость у топ-менеджмента', resultIndex: 7},
                {answerText: 'Спокойствие и безопасности у босса', questionText: 'Как у нас с бюджетом?', answers: [
                  {answerText: 'Как всегда...', resultIndex: 3},
                  {answerText: 'Нормально!', resultIndex: 7}
                ]}
              ]}
            ]}
        ]},
        results: [
          {name: 'Urban Kit 1', itemIndex: 0},
          {name: 'Urban Kit 2', itemIndex: 1},
          {name: 'Urban Kit 2+', itemIndex: 2},
          {name: 'Urban Full', itemIndex: 3},
          {name: 'MVA Kit', itemIndex: 3},
          {name: 'MVA+'},
          {name: 'Mountain kit'},
          {name: 'Any mission'},
          {name: '¯_(ツ)_/¯ Лучше купить шоколадку'}
        ],
        winnerIndex: null,
        finished: false
      }
    }

class App extends React.Component {
  constructor(props){
    super(props)
    this.state = _.clone(initialState)
    this.chooseItem = this.chooseItem.bind(this)
    this.addItem = this.addItem.bind(this)
    this.toggleCartModal = this.toggleCartModal.bind(this)
    this.giveAnswer = this.giveAnswer.bind(this)
    this.restartTest = this.restartTest.bind(this)
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
  toggleCartModal(){
    let cart = {...this.state.cart}
    cart.opened = !cart.opened
    this.setState({cart})
  }

  // test methods
  giveAnswer(e, answer){
    let test = {...this.state.test}

    if(answer.resultIndex !== undefined){ // if this queue level have result
      test.winnerIndex = answer.resultIndex // then finishing
      test.finished = true
    } else {
      test.queue = answer // or getting to next queue level
    }

    this.setState({test})
  }
  restartTest(e){
    let test = {...this.state.test}
    test.queue = initialState.test.queue
    test.finished = false
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

    // fix for react-fullpage onload bug
    window.location.hash = ''

    return (
      <div>
        <Header>
            <MainMenu />
            <Cart cart={cart} toggleCartModal={this.toggleCartModal} />
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
            <Test test={test} giveAnswer={this.giveAnswer} restartTest={this.restartTest} />
          </Section>
          <Section verticalAlign="true">About</Section>
        </SectionsContainer>
      </div>
    );
  }
}

export default App;
