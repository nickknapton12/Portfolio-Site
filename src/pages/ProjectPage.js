import "../styles/projectPageStyles.css";
import Project from './project'
import React from "react";
import fantasyLeaguePic from '../images/fantasyLeaguePic.JPG';
import sudokuPic from '../images/sudokuPic.JPG';
import classReminderPic from '../images/DiscordBot.JPG';

class ProjectPage extends React.Component {
    constructor(){
        super();
        this.state = {
            slide1: false,
            slide2: false,
            slide3: false,
        }
    }

    
    componentDidMount() {
          window.addEventListener('scroll', () => {
            let currentScrollPos = window.pageYOffset;
            if (currentScrollPos > 220 && this.state.slide1 == false) {
                document.getElementById("project1").classList.add("progSlide");
                this.setState({slide1: true})
            }
            if (currentScrollPos > 450 && this.state.slide2 == false) {
                document.getElementById("project2").classList.add("progSlide");
                this.setState({slide2: true})
            }
            if (currentScrollPos > 690 && this.state.slide3 == false) {
                document.getElementById("project3").classList.add("progSlide");
                this.setState({slide3: true})
            }
          });
        
    }

  render() {
    return (
      <div className="projectPage">
        <Project link="https://github.com/nickknapton12/MTB-FantasyLeage-App" theId={"project1"} image={fantasyLeaguePic} title="MTB Fantasy League" description="eigsgihse"/>
        <Project link="https://github.com/nickknapton12/Sudoku-Solver-Visualizer" theId={"project2"} image={sudokuPic} title="Sudoku Solver Visualizer" description="This project I made to solve the classic game of Sudoku! It uses a backtracking algorithm to move through the puzzle and find the correct solution. Features variable speed to either find instant solution or to see the algorithm in work!"/>
        <Project link="https://github.com/nickknapton12/Class-Reminder-Bot" theId={"project3"} image={classReminderPic} title="Class Reminder Discord Bot" description="I built this to serve as a better way to remind me what I had due in university (better then sticky notes on my wall) and currently serves my software engg years discord group of over 200 students. The bot sends daily reminders of assignments due, Tests and quizzes, and labs coming up for each class a user subscribes to!"/>
      </div>
    );
  }
}

export default ProjectPage;
