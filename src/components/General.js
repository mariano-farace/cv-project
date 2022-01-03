import React from "react";

class General extends React.Component {
  constructor(props) {
    super(props);
       this.handleInputChange = this.handleInputChange.bind(this);
  }

  handleInputChange(event) {
    
    this.props.setGeneral(event.target.name,event.target.value
    )

console.log('puto objeeto::', [event.target.name])


    
  }
/*name, email, phone number */
  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Name:
          <input
            name="name"
            type="text"
            onChange={this.handleInputChange} />
        </label>
        <br />
        <label>
          Email:
          <input
            name="email"
            type="text"
            onChange={this.handleInputChange} />
        </label>
        <br />
        <label>
          Phone Number:
          <input
            name="phoneNumber"
            type="text"
            onChange={this.handleInputChange} />
        </label>
        <br />
        <input type="submit" value="Submit"  />
      </form>
    );
  }
}


export default General;