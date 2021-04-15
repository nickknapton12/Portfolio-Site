import './styles/App.css';
import LandingPage from './pages/LandingPage.js';
import React from 'react';

class App extends React.Component {

  scrollDown(id) {
    document.getElementById(id).scrollIntoView({ behavior: "smooth" });
  }

  render() {
    return (
      <div className="App">
        <div id="page1">
          <div className="backgroundNav">
            <div className="header">
              <h1 className="pageHeader">Nicholas Knapton</h1>
              <div></div>
              <div className="menu">
                <h1 className="menuHeader">
                  <div className="menuCircle">
                  </div> Menu
                </h1>
              </div>
            </div>

          </div>
          <LandingPage />
          <i class="material-icons" id="downIcon" onClick={() => this.scrollDown("page2")}>keyboard_arrow_down</i>
        </div>
        <div id="page2">
          <i class="material-icons" id="upIcon" onClick={() => this.scrollDown("page1")}>keyboard_arrow_up</i>
          <h1 className="nextPageButton" onClick={() => this.scrollUp("page3")}> &#62; </h1>
          <h1 className="pageHeader">P2</h1>
          <i class="material-icons" id="downIcon" onClick={() => this.scrollDown("page2")}>keyboard_arrow_down</i>
        </div>
      </div>
    );
  }
}

export default App;
