//
import React from "react";

class Example extends React.Component {
  constructor(props) {
    super(props);
    this.state = { count: 0 };
  }
  //   useEffect with empty dependency array
  componentDidMount() {
    console.log("this component has been mounted");
  }
  componentDidUpdate(prevProps, prevState) {
    // if (prevState.count !== this.state.count) {
      console.log("component updated");
    // }
  }
  componentWillUnmount() {
    console.log("component unmounted");
  }
  increment = () => {
    this.setState({ count: this.state.count + 1 });
  };
  render() {
    return <button onClick={this.increment}>Count: {this.state.count}</button>;
  }
}

export default Example;
