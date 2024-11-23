import React from "react";

class GreetClass extends React.Component {
  render() {
    return (
      <div>
        Hi my name is {this.props.name} & my age is {this.props.age}
      </div>
    );
  }
}

export default GreetClass;
