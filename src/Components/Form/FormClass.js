import React, { Component } from "react";

class FormClass extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      email: "",
      password: "",
    };
  }
  handleChange = (e) => {
    const { id, value } = e.target;
    this.setState({ [id]: value });
  };
  render() {
    const { name, email, password } = this.state;
    return (
      <div>
        <input
          id="name"
          value={name}
          type="text"
          onChange={this.handleChange}
        />
        <input
          id="email"
          value={email}
          type="email"
          onChange={this.handleChange}
        />
        <input
          id="password"
          value={password}
          type="password"
          onChange={this.handleChange}
        />
      </div>
    );
  }
}
export default FormClass;
