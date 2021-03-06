import "./styles/App.css";
import LandingPage from "./pages/LandingPage.js";
import ProjectPage from "./pages/ProjectPage";
import TechnologiesPage from './pages/TechnologiesPage'
import ContactPage from './pages/ContactPage'
import React, { useRef } from "react";

class App extends React.Component {
  constructor() {
    super();
    this.state = {};
  }

  scrollDown(id) {
    document.getElementById(id).scrollIntoView({ behavior: "smooth" });
  }

  showMenu() {
    console.log("menu");
    document.querySelector(".navBar").classList.toggle("nav-active");
    document.querySelector(".menu").classList.toggle("menuRotate");
    document.querySelectorAll(".navItem").forEach((classItem, index) => {
      setTimeout(() => {
        classItem.classList.toggle("navSlide");
      }, 100 + index * 110);
    });
  }

  render() {
    return (
      <div className="App">
        <div className="nav">
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
        </div>
        <div id="page1">
          <LandingPage />
        </div>
        <div id="page2">
           <h2 className="landingPageHeaderType2">Projects</h2>
          <ProjectPage />
        </div>
        <div id="page3">
          <h2 className="landingPageHeaderType2">Technologies and Tools</h2>
          <TechnologiesPage />
        </div>
        <div id="page4">
          <ContactPage />
        </div>
      </div>
    );
  }
}

export default App;
