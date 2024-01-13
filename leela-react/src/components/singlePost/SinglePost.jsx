import { Component } from "react";
import PropTypes from "prop-types";
class SinglePost extends Component {
  render() {
    return (
      <div className=" flex  border border-gray-700">
        <div className="border border-gray-100">{this.props.title}</div>{" "}
        <div className="border border-lime-100">{this.props.description}</div>
      </div>
    );
  }
}

SinglePost.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
};
export default SinglePost;
