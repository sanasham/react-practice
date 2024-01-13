import PropTypes from "prop-types";
import { Component } from "react";

class HelloWorld extends Component {
  render() {
    return (
      <div>
        <div>{this.props.text}</div>
      </div>
    );
  }
}
HelloWorld.propTypes = {
  text: PropTypes.string,
};
export default HelloWorld;
