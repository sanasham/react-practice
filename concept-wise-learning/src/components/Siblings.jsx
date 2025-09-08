const Siblings = ({ title, count, increment }) => {
  return (
    <div>
      <p>Siblings Component {title}</p>
      <p>Count: {count}</p>
      <button className='border bg-amber-400' onClick={increment}>
        Increment
      </button>
    </div>
  );
};
Siblings.prototype = {
  title: String,
};

export default Siblings;
