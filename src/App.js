import React from 'react';
import {SectionsContainer, Section, Header, Footer} from 'react-fullpage';
import logo from './logo.svg';
import './App.css';

import MainMenu from './components/MainMenu/MainMenu'

class App extends React.Component {
  render() {
    let options = {
      sectionClassName:     'section',
      anchors:              ['sectionOne', 'sectionTwo', 'sectionThree'],
      scrollBar:            false,
      navigation:           true,
      verticalAlign:        false,
      arrowNavigation:      true,
      scrollingSpeed: 400
    };

    return (
      <div>
        <Header>
            <MainMenu />
        </Header>
        <Footer>
          <a href="">Dcoumentation</a>
          <a href="">Example Source</a>
          <a href="">About</a>
        </Footer>
        <SectionsContainer className="container" {...options}>
          <Section className="custom-section" verticalAlign="true" color="#69D2E7">Page 1</Section>
          <Section color="#A7DBD8">Page 2</Section>
          <Section color="#E0E4CC">Page 3</Section>
        </SectionsContainer>
      </div>
    );
  }
}

export default App;
