import { useState } from 'react';

const Colorizer = () => {
  const [color, setColor] = useState('black');
  const changeColor = () => {
    const randomColor = '#' + Math.floor(Math.random() * 16777215).toString(16);
    setColor(randomColor);
  };
  return (
    <div className='flex flex-col items-center justify-center min-h-screen gap-4'>
      <h1>Colorizer</h1>
      <div
        style={{ backgroundColor: color, width: '100px', height: '100px' }}
      ></div>
      <button className='bg-blue-500 rounded-2xl' onClick={changeColor}>
        Change Color
      </button>
    </div>
  );
};

export default Colorizer;
