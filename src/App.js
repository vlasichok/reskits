import React from 'react';
import {SectionsContainer, Section, Header, Footer} from 'react-fullpage';
import logo from './logo.svg';
import './App.css';

import MainMenu from './components/MainMenu/MainMenu'
import Slider from './components/Slider/Slider'

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
      }
    }
    this.chooseItem = this.chooseItem.bind(this)
  }

  chooseItem(e, i){
    let catalog = {...this.state.catalog}
    catalog.currentIndex = i

    this.setState({catalog})
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
    const {catalog} = this.state

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
          <Section verticalAlign="true">Test</Section>
          <Section verticalAlign="true">About</Section>
        </SectionsContainer>
      </div>
    );
  }
}

export default App;
