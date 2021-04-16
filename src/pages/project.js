import React from 'react';
import '../styles/projectPageStyles.css';

class Project extends React.Component{
    constructor(props){
        super(props);
        this.state = {
        
        }
    }

    render(){
        return(
        <div className="project" id={this.props.theId}>
            <img src={this.props.image} className="projectimg" />
            <h1 className="projectTitle">{this.props.title} | <a className="githubLink" target="_blank" href={this.props.link}>Github</a></h1>
            <p className="projectDescription">{this.props.description}</p>
        </div>
    );
    }
    
}

export default Project;