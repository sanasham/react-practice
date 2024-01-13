import PropTypes from "prop-types";
function Button(props) {
  return (
    <div>
      <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold mt-2 py-2 w-24 px-4 rounded-full">
        {props.name}
      </button>
    </div>
  );
}
Button.propTypes = {
  name: PropTypes.string,
};
export default Button;
