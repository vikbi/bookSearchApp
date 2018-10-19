import React, { Component } from "react";

export default class SearchBook extends Component {
  constructor(props) {
    super(props);
    this.state = { value: "" };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({ value: event.target.value });
  }

  handleSubmit(event) {
    event.preventDefault();
    if (this.state.value && this.state.value.length > 1) bookform.submit();
  }
  render() {
    const Style = {
      input : {
              width: 250,
              height: 30,
              borderRadius: 30,
              border: "1px solid #382110",
              margin: 10,
              paddingLeft: 20,
              fontSize: 15
      },
      button : {
              width: 90,
              height: 35,
              fontSize: 14,
              marginLeft: 15,
              marginTop:10,
              backgroundColor: "#4f62ca",
              color: "#fff",
              border: "1px solid #yellow",
              borderRadius: 30,
              cursor: "pointer"
      },
      form : { display: "flex", flexWrap: "wrap" }
    }
    return (
      <div>
        <h2>Search Books by Title</h2>
      <form
        style={ Style.form }
        required
        name="bookform"
        method="get"
        action={`/book/${this.state.value}`}
        onSubmit={this.handleSubmit}
      >
        <label>
          <input
            style={Style.input}
            type="text"
            value={this.state.value}
            onChange={this.handleChange}
            required
            placeholder="Search books"
          />
        </label>
        <button style={Style.button} >Search</button>
      </form>
      </div>
    );
  }
}