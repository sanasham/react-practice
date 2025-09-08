import { useState } from 'react';
import CartItem from './CartItem';

const Cart = () => {
  const product = { name: 'Book', quantity: 1 };
  const [message, setMessage] = useState('Hello from Cart component');
  const handleProductChange = () => {
    product.quantity += 1;
    console.log('Parent product quantity changed to:', product.quantity);
  };
  return (
    <div>
      <CartItem item={product} title='first Child' msg={message} />
      <br />
      {/* <CartItem item={product} title='Second Child' /> */}

      <br />
      <button className='border bg-amber-800' onClick={handleProductChange}>
        parent change
      </button>
      <br />
      <button
        className='border bg-pink-900'
        onClick={() => setMessage('Hi Esub')}
      >
        Change Message
      </button>
    </div>
  );
};

export default Cart;
