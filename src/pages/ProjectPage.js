import "../styles/projectPageStyles.css";
import Project from './project'
import React from "react";
import fantasyLeaguePic from '../images/fantasyLeaguePic.JPG';
import sudokuPic from '../images/sudokuPic.JPG';

class ProjectPage extends React.Component {
    constructor(){
        super();
        this.state = {
            slide: ""
        }
    }

    
    componentDidMount() {
          window.addEventListener('scroll', () => {
            let currentScrollPos = window.pageYOffset;
            if (currentScrollPos > 220 && currentScrollPos < 1800) {
                document.getElementById("project1").classList.add("progSlide");
            }else {
                document.getElementById("project1").classList.remove("progSlide");
            }
            if (currentScrollPos > 450 && currentScrollPos < 1800) {
                document.getElementById("project2").classList.add("progSlide");
            }else{
                document.getElementById("project2").classList.remove("progSlide");
            }
            if (currentScrollPos > 690 && currentScrollPos < 1800) {
                document.getElementById("project3").classList.add("progSlide");
            }else{
                document.getElementById("project3").classList.remove("progSlide");
            }
          });
        
    }

  render() {
    return (
      <div className="projectPage">
        <Project link="https://github.com/nickknapton12/MTB-FantasyLeage-App" theId={"project1"} image={fantasyLeaguePic} title="MTB Fantasy League" description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse venenatis eu elit non aliquam. Nam facilisis quis leo quis aliquet. Interdum et malesuada fames ac ante ipsum primis in faucibus. Nunc efficitur turpis nec sem ornare maximus. Curabitur dapibus mauris sit amet neque ultrices, eu sagittis turpis laoreet. Ut enim diam, imperdiet sed venenatis in, consequat ac orci. Duis nec massa blandit, imperdiet enim ut, cursus ligula. Duis maximus risus"/>
        <Project link="https://github.com/nickknapton12/Sudoku-Solver-Visualizer" theId={"project2"} image={sudokuPic} title="Sudoku Solver Visualizer" description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse venenatis eu elit non aliquam. Nam facilisis quis leo quis aliquet. Interdum et malesuada fames ac ante ipsum primis in faucibus. Nunc efficitur turpis nec sem ornare maximus. Curabitur dapibus mauris sit amet neque ultrices, eu sagittis turpis laoreet. Ut enim diam, imperdiet sed venenatis in, consequat ac orci. Duis nec massa blandit, imperdiet enim ut, cursus ligula. Duis maximus risus"/>
        <Project link="https://github.com/nickknapton12/Class-Reminder-Bot" theId={"project3"} image={fantasyLeaguePic} title="MTB Fantas" description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse venenatis eu elit non aliquam. Nam facilisis quis leo quis aliquet. Interdum et malesuada fames ac ante ipsum primis in faucibus. Nunc efficitur turpis nec sem ornare maximus. Curabitur dapibus mauris sit amet neque ultrices, eu sagittis turpis laoreet. Ut enim diam, imperdiet sed venenatis in, consequat ac orci. Duis nec massa blandit, imperdiet enim ut, cursus ligula. Duis maximus risus"/>
      </div>
    );
  }
}

export default ProjectPage;
