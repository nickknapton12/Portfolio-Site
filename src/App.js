import "./styles/App.css";
import LandingPage from "./pages/LandingPage.js";
import React from "react";

class App extends React.Component {
  scrollDown(id) {
    document.getElementById(id).scrollIntoView({ behavior: "smooth" });
  }

  showMenu() {
    console.log("menu");
    document.querySelector(".navBar").classList.toggle("nav-active");
    document.querySelector(".menu").classList.toggle("menuRotate");
    document.querySelectorAll(".navItem").forEach((classItem) => {
      classItem.classList.toggle("navSlide");
    });
  }

  render() {
    return (
      <div className="App" onScroll={this.scrollDown}>
        <div id="page1">
          <div className="navBar">
            <h2
              className="navItem"
              id="navItem1"
              onClick={() => this.scrollDown("page1")}
            >
              About
            </h2>
            <h2 className="navItem" onClick={() => this.scrollDown("page2")}>
              Projects
            </h2>
            <h2 className="navItem" onClick={() => this.scrollDown("page3")}>
              Technologies
            </h2>
            <h2 className="navItem" onClick={() => this.scrollDown("page4")}>
              Contact
            </h2>
          </div>
          <div className="backgroundNav">
            <div className="header">
              <h1 className="pageHeader">Nicholas Knapton</h1>
              <div className="menu" onClick={this.showMenu}>
                <h1 className="menuHeader">
                  <div className="menuCircle"></div> Menu
                </h1>
              </div>
            </div>
          </div>
          <LandingPage />
          <i
            className="material-icons"
            id="downIcon"
            onClick={() => this.scrollDown("page2")}
          >
            keyboard_arrow_down
          </i>
        </div>
        <div id="page2">
          <i
            class="material-icons"
            id="upIcon"
            onClick={() => this.scrollDown("page1")}
          >
            keyboard_arrow_up
          </i>
          <h1 className="pageHeader">P2</h1>
          <i
            class="material-icons"
            id="downIcon"
            onClick={() => this.scrollDown("page2")}
          >
            keyboard_arrow_down
          </i>
        </div>
        <div id="page3">

        </div>
        <div id="page4">

        </div>
      </div>
    );
  }
}

export default App;
