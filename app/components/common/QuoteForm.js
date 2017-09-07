import React, { Component } from "react";
import API from "../../utils/API";


// https://api.nytimes.com/svc/search/v2/articlesearch.json?api-key=b9f91d369ff59547cd47b931d8cbc56b:0:74623931&q=bob

class QuoteForm extends Component {
  constructor() {
    super();
    this.state = {
      inputValue: "",
      startdate: "",
      enddate: "",
      numrecord: ""
    };
    // Binding handleInputChange and handleButtonClick since we'll be passing them as
    // callbacks and 'this' will change otherwise
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleStartDateChange = this.handleStartDateChange.bind(this);
    this.handleEndDateChange = this.handleEndDateChange.bind(this);
    this.handleNumRecordChange = this.handleNumRecordChange.bind(this);
    this.handleButtonClick = this.handleButtonClick.bind(this);

  }
  handleInputChange(event) {
    this.setState({ inputValue: event.target.value });
  }
    handleStartDateChange(event) {
    this.setState({ startdate: event.target.value });
  }
    handleEndDateChange(event) {
    this.setState({ enddate: event.target.value });
  }
    handleNumRecordChange(event) {
    this.setState({ numrecord: event.target.value });
  }
  handleButtonClick() {
    let query = this.state.inputValue;
    let start = this.state.startdate;
    let end = this.state.enddate;
    API.searchArticle(query, start, end).then(function(data){
      let dj = JSON.stringify(data)
        for(var i = 0; i < data.length; i++){
          console.log(data[i].web_url)

        }

    })
    this.setState({ 
      inputValue: "",
      startdate: "",
      enddate: "",
      numrecord: ""
     });
  }
  render() {
    return (
      <div className="col-md-6 col-md-offset-3">
        <div style={styles.formStyle} className="form-group">
          <label htmlFor="input-box">
            Add a quote
          </label>
          <form>
          <input
            style={{
              resize: "none"
            }}
            onChange={this.handleInputChange}
            value={this.state.inputValue}
            placeholder="Add a new quote here!"
            className="form-control"
            id="input-box"
            rows="3"
          />

          <input 
          style={{
            resize:"none"
          }}
          onChange={this.handleStartDateChange}
          value={this.state.startdate}
          placeholder="Start date"
          className="form-control"
          id="start-date"
          />

          <input 
          style={{
            resize:"none"
          }}
          onChange={this.handleEndDateChange}
          value={this.state.enddate}
          placeholder="End date"
          className="form-control"
          id="end-date"
          />

          <input 
          style={{
            resize:"none"
          }}
          onChange={this.handleNumRecordChange}
          value={this.state.numrecord}
          placeholder="Number of records"
          className="form-control"
          id="numrecord"
          />

          </form>
          <button
            onClick={this.handleButtonClick}
            className="btn btn-success"
            style={styles.buttonStyle}
          >
            Submit
          </button>
        </div>
      </div>
    );
  }
}

const styles = {
  buttonStyle: {
    float: "right",
    marginTop: 10
  },
  formStyle: {
    marginBottom: 60,
    marginTop: 60
  }
};

export default QuoteForm;