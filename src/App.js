import React from 'react'
import State from './State'
import _ from 'lodash'
import 'fullpage.js'
import './App.css'
import {Icon} from 'react-fa'
import reqwest from 'reqwest'

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

    // app methods
    this.toggleMobileMenu = this.toggleMobileMenu.bind(this)

    // slider methods
    this.chooseItem = this.chooseItem.bind(this)
    this.goToNextImg = this.goToNextImg.bind(this)
    this.togglePartsModal = this.togglePartsModal.bind(this)
    this.toggleInfoModal = this.toggleInfoModal.bind(this)
    this.addItem = this.addItem.bind(this)

    // cart methods
    this.updateForm = this.updateForm.bind(this)
    this.changeQuantity = this.changeQuantity.bind(this)
    this.removeItem = this.removeItem.bind(this)
    this.loadNPCities = this.loadNPCities.bind(this)
    this.toggleCartModal = this.toggleCartModal.bind(this)

    // test methods
    this.giveAnswer = this.giveAnswer.bind(this)
    this.restartTest = this.restartTest.bind(this)
    this.goToResult = this.goToResult.bind(this)

    // details methods
    this.toggleCollapse = this.toggleCollapse.bind(this)
  }


  // app methods
  toggleMobileMenu(){
    this.setState({mobileMenuOpened: !this.state.mobileMenuOpened})
  }

  // slider methods
  chooseItem(e, i){
    let catalog = {...this.state.catalog}
    catalog.currentIndex = i
    this.setState({catalog})
  }
  togglePartsModal(e){
    let catalog = {...this.state.catalog}
    catalog.partsOpened = !catalog.partsOpened
    this.setState({catalog})

    window.$.fn.fullpage.setAllowScrolling(!catalog.partsOpened) // toggling scroll type
  }
  toggleInfoModal(e){
    let catalog = {...this.state.catalog}
    catalog.infoOpened = !catalog.infoOpened
    this.setState({catalog})

    window.$.fn.fullpage.setAllowScrolling(!catalog.infoOpened) // toggling scroll type
  }
  goToNextImg(currItemIndex, reversedOrder){
    let catalog = {...this.state.catalog}
    let currentItem = catalog.items[currItemIndex]
    let isFirst = currentItem.gallery.current === 0
    let isLast = currentItem.gallery.current === currentItem.gallery.imgs.length-1

    if(reversedOrder) {
        (!isFirst) ? currentItem.gallery.current-- : currentItem.gallery.current = currentItem.gallery.imgs.length-1
    } else {
        (!isLast) ? currentItem.gallery.current++ : currentItem.gallery.current = 0
    }

    this.setState({catalog})
  }
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

  // cart methods
  changeQuantity(index, increment){
    let cart = {...this.state.cart};
    (increment) ? cart.items[index].quantity++ : cart.items[index].quantity--
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
  updateForm(model){
    let cart = {...this.state.cart}
    cart.form = model
    this.setState({cart})
  }
  loadNPCities(cityName){
    reqwest({
        url: "https://api.novaposhta.ua/v2.0/json/",
        method: "GET",
        type: "jsonp",
        contentType: "application/json; charset=UTF-8",
        data: {
          apiKey: "7314d0691ba990733c4a83182ca0354d",
          modelName: "Address",
              calledMethod: "searchSettlements",
              methodProperties: {
                  CityName: "Одеса",
                  Limit: 5
            }
        },
    }).then( response => {
        let cart = {...this.state.cart}
        cart.NPCities = response.data[0].Addresses
        this.setState({cart})
    })
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

  // details methods
  toggleCollapse(e, index){
    let details = {...this.state.details}
    for (let i = 0; i < details.items.length; i++){
      details.items[i].expanded = (i === index) ? !details.items[i].expanded : false
    }
    this.setState({details})
  }

  componentDidMount(){
    function fullpageInit(){
       window.$('#fullpage').fullpage({
          anchors: ['main', 'catalog', 'details', 'test', 'about'],
          scrollOverflow: true,
          verticalCentered: true,
          normalScrollElement: '.modal',
          afterRender: changeLoadingState.bind(this),
        })
    }
    function changeLoadingState(){ // for preloader
      this.setState({loading: false, currentSection: window.location.hash})
    }
    function changeCurrentLocation(){ // changing current hash state
      this.setState({currentSection: window.location.hash})
    }

    window.$(document).ready(
      fullpageInit.call(this)
    );
    window.onhashchange = changeCurrentLocation.bind(this)
  }

  render() {
    const {catalog, cart, test, details} = this.state

    return (
      <div>
        <div className={this.state.loading ? "loading " : "loading hide"}>
          <h3>Загрузка...</h3>
        </div>

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

        <div>
          <div id="header">
            <div className="pull-left mt-4 ml-3 ml-sm-5">
              <a href="#main" className="no-decoration"><img className="logo" src='/logo.svg' alt='logo' /></a>
            </div>

            <Cart cart={cart} 
              changeQuantity={this.changeQuantity} 
              removeItem={this.removeItem} 
              updateForm={this.updateForm} 
              toggleCartModal={this.toggleCartModal} 
              loadNPCities={this.loadNPCities} 
            />
            <MainMenu 
              toggleMobileMenu={this.toggleMobileMenu}
              currentSection={this.state.currentSection} 
            />

          </div>

          <div id="fullpage">

            <section className="section">
              <Home />
            </section>

            <section className="section">
              <Slider catalog={catalog} 
                chooseItem={this.chooseItem} 
                goToNextImg={this.goToNextImg} 
                addItem={this.addItem} 
                togglePartsModal={this.togglePartsModal} 
                toggleInfoModal={this.toggleInfoModal} 
              />
            </section>

            <section className="section">
              <Details items={details.items} 
                toggleCollapse={this.toggleCollapse} 
              />
            </section>

            <section className="section">
              <Test test={test} 
                giveAnswer={this.giveAnswer} 
                restartTest={this.restartTest} 
                goToResult={this.goToResult}
              />
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