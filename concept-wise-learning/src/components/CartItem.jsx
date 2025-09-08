import PropTypes from 'prop-types';
import { useState } from 'react';

const CartItem = ({ item, title, msg }) => {
  const [quantity, setQuantity] = useState(item.quantity);
  const [count, setCount] = useState(0);
  console.log('Child re-rendered');
  const handleClick = () => {
    setCount(count + 1);
  };
  return (
    <div>
      <span>{title}</span>
      <p>{item.name}</p>
      <p>{`incoming item quantity: ${item.quantity}`}</p>
      <button onClick={() => setQuantity(quantity + 1)}>++</button>
      <p>{`increment item quantity: ${quantity}`}</p>
      <br />
      <br />
      <p>`Message` + {msg}</p>
      <button
        onClick={handleClick}
        className='border bg-amber-200 rounded-b-sm'
      >
        increment
      </button>
      <p>{`count: ${count}`}</p>
    </div>
  );
};

CartItem.propTypes = {
  item: PropTypes.shape({
    name: PropTypes.string.isRequired,
    quantity: PropTypes.number.isRequired,
  }).isRequired,
  title: PropTypes.string.isRequired,
};

export default CartItem;
