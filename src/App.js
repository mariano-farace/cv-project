import React, { Component } from "react";
import uniqid from "uniqid";
import General from "./components/General"
import Education from "./components/Education";
import { ButtonNewEducation } from "./components/ButtonNewEducation";
class App extends Component {

  constructor(props) {
    super(props);
    this.state = {general:{
    name: '',email:"", phoneNumber: "", id : uniqid()
  }
    };
  
    this.setGeneral = this.setGeneral.bind(this);
    this.setEducation = this.setEducation.bind(this)
  }

 

  setGeneral(key, value){
    this.setState({
      ...this.state,
      general: {
        ...this.state.general,
        [key]:value
      }
    });
  }

  setEducation(key,value){  this.setState({
    ...this.state,
    education: {
      ...this.state.education,
      [key]:value
    }
  });}




  
  render() {
    const general = this.props.general
    return (
    <div>
    <h2>Personal Information</h2>
    <General general={general} setGeneral={this.setGeneral}/>
    <hr></hr>
    <h2>Education Experience</h2>
    <Education/>
    <ButtonNewEducation setEducation={this.setEducation} text="+ Add education"/>
    </div>)
  }
}

export default App;