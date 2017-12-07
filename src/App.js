import React from 'react'
import State from './State'
import _ from 'lodash'
import 'fullpage.js'
import './App.css'
import {Icon} from 'react-fa'

import MainMenu from './components/MainMenu/MainMenu'
import OverlayMenu from 'react-overlay-menu'
import Cart from './components/Cart/Cart'
import Home from './components/Home/Home'
import Slider from './components/Slider/Slider'
import Test from './components/Test/Test'
import Details from './components/Details/Details'
import About from './components/About/About'

window.$ = window.jQuery = require('jquery');
window.IScroll = require('iscroll');
require('fullpage.js/vendors/scrolloverflow.min.js');

if(sessionStorage['cartItems']) State.cart.items = JSON.parse(sessionStorage['cartItems'])
const initialState = State

class App extends React.Component {
  constructor(props){
    super(props)
    this.state = _.clone(initialState)

    this.toggleMobileMenu = this.toggleMobileMenu.bind(this)
    this.chooseItem = this.chooseItem.bind(this)
    this.toggleInfoModal = this.toggleInfoModal.bind(this)
    this.addItem = this.addItem.bind(this)
    this.removeItem = this.removeItem.bind(this)
    this.toggleCartModal = this.toggleCartModal.bind(this)
    this.giveAnswer = this.giveAnswer.bind(this)
    this.restartTest = this.restartTest.bind(this)
    this.goToResult = this.goToResult.bind(this)
  }

  toggleMobileMenu(){
    this.setState({mobileMenuOpened: !this.state.mobileMenuOpened})
  }

  // slider methods
  chooseItem(e, i){
    let catalog = {...this.state.catalog}
    catalog.currentIndex = i
    this.setState({catalog})
  }
  toggleInfoModal(e){
    let catalog = {...this.state.catalog}
    catalog.infoOpened = !catalog.infoOpened
    this.setState({catalog})

    window.$.fn.fullpage.setAllowScrolling(!catalog.infoOpened) // toggling scroll type
  }

  // cart methods
  addItem(e, item){
    let cart = {...this.state.cart}
    let existingIndex = cart.items.findIndex(i => i.name === item.name)

    if(existingIndex !== -1){ // checking if such item already added
      cart.items[existingIndex].quantity++
    } else {
      item.quantity = 1
      cart.items.push(item)
    }

    this.setState({cart})
    sessionStorage.setItem('cartItems', JSON.stringify(cart.items))
  }
  removeItem(e, index){
    let cart = {...this.state.cart}
    cart.items.splice(index, 1)
    this.setState({cart})
    sessionStorage.setItem('cartItems', JSON.stringify(cart.items))
  }
  toggleCartModal(){
    let cart = {...this.state.cart}
    cart.opened = !cart.opened
    this.setState({cart})

    window.$.fn.fullpage.setAllowScrolling(!cart.opened) // toggling scroll type
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
  goToResult(e, index){
    window.location.hash = 'catalog'
    this.chooseItem(e, index)
  }

  componentDidMount(){
    function fullpageInit(){
       window.$('#fullpage').fullpage({
          anchors: ['main', 'catalog', 'details', 'test', 'about'],
          scrollOverflow: true,
          verticalCentered: true,
          normalScrollElement: '.modal',
          afterRender: changeLoadingState.bind(this)
        })
    }
    function changeLoadingState(){
      this.setState({loading: false})
    }

    window.$(document).ready(
      fullpageInit.call(this)
    );
  }
  render() {
    const {catalog, cart, test} = this.state

    return (
      <div>
        <div className={this.state.loading ? "loading " : "loading hide"}>
          <h3>Загрузка...</h3>
        </div>
        <div>
          <div id="header">
            <div className="pull-left mt-4 pt-1 ml-5">ЛОГО</div>

            <Cart cart={cart} removeItem={this.removeItem} toggleCartModal={this.toggleCartModal} />
            <MainMenu toggleMobileMenu={this.toggleMobileMenu} />

            <OverlayMenu 
              open={this.state.mobileMenuOpened} 
              onClose={this.toggleMobileMenu}
              right
            >
              <div className="text-center my-3">
                <a onClick={this.toggleMobileMenu}>
                  <Icon name="times" size="2x" />
                </a>
              </div>
              <ul className="mx-5">
                <li><a href="#main">Главная</a></li>
                <li><a href="#catalog">Каталог</a></li>
                <li><a href="#details">FAQ</a></li>
                <li><a href="#test">Подобрать</a></li>
                <li><a href="#about">О нас</a></li>
              </ul>
            </OverlayMenu>
          </div>

          <div id="fullpage">
            <section className="section">
              <Home />
            </section>
            <section className="section">
              <Slider catalog={catalog} chooseItem={this.chooseItem} addItem={this.addItem} toggleInfoModal={this.toggleInfoModal} />
            </section>
            <section className="section">
              <Details />
            </section>
            <section className="section">
              <Test test={test} giveAnswer={this.giveAnswer} restartTest={this.restartTest} goToResult={this.goToResult} />
            </section>
            <section className="section">
              <About />
            </section>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
