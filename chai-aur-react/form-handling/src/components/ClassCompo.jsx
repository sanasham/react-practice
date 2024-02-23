import { Component } from "react";

export default class ClassCompo extends Component {
  constructor(props) {
    super();
    this.state = {
      name: props.name,
    };
    this.handleChangeName = this.handleChangeName.bind(this);
  }
  handleChangeName() {
    console.log("handle clicked");
    this.setState({ name: "test" });
  }

  render() {
    return (
      <>
        <h1>test render {this.state.name}</h1>
        <button onClick={this.handleChangeName}>change name</button>
      </>
    );
  }
}
