import React from "react";

class Education extends React.Component {
  constructor(props) {
    super(props);
       this.handleInputChange = this.handleInputChange.bind(this);
  }

  handleInputChange(event) {
    
    this.props.setGeneral(event.target.name,event.target.value
    )

    
  }
  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          School Name:
          <input
            name="school-name"
            type="text"
            onChange={this.handleInputChange} />
        </label>
        <br />
        <label>
        Title Of Study:
          <input
            name="email"
            type="text"
            onChange={this.handleInputChange} />
        </label>
        <br />
        <label>
        Start Date:
          <input
            name="start-date"
            type="date"
            onChange={this.handleInputChange}
            value="2018-07-22"
       min="2018-01-01" max="2018-12-31" />
        </label>
        <br />
        <label>
        End Date:
          <input
            name="end-date"
            type="date"
            onChange={this.handleInputChange}
            value="2018-07-22"
       min="2018-01-01" max="2018-12-31" />
        </label>
        <br />
        <input type="submit" value="Submit"  />
      </form>
    );
  }
}

export default Education;