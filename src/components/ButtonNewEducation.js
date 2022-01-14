
import React from 'react'; 



class ButtonNewEducation extends React.Component {
  constructor(props) {
    super(props);

  }
  render(){
    return( <button className="AddButton" onClick={this.props.onClick}>{this.props.text}</button> )
  }
}

export {ButtonNewEducation};