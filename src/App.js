import React, { Component } from "react";
import uniqid from "uniqid";
import General from "./components/General"
class App extends Component {

  constructor(props) {
    super(props);
    this.state = {general:{
    name: '',email:"", phoneNumber: "", id : uniqid()
  }
    };
    this.setGeneral = this.setGeneral.bind(this);
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
  render() {
    const general = this.props.general
    return (<General general={general} setGeneral={this.setGeneral}/>)
  }
}

export default App;