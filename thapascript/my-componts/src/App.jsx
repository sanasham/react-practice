// import { useState } from 'react';
import './App.css';
import FindUser from './components/FindUser';

function App() {
  // const [count, setCount] = useState(0);
  // const increment = () => {
  //   setCount(count + 1);
  // };

  return (
    <>
      {/* <div className='flex  items-start justify-center min-h-screen gap-4 pt-16'>
        <h1 className='text-2xl sm:text-3xl font-bold underline text-center'>
          Hello world!
        </h1>
        <p className='text-base sm:text-lg text-center'>
          Good Morning! <span className='text-red-500 font-bold'>{count}</span>
        </p>
        <button
          className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded w-32 mt-4 transition'
          onClick={increment}
        >
          Increment
        </button> */}
      {/* <MoviesComponent /> */}
      {/* </div> */}
      {/* <Colorizer /> */}
      <FindUser />
    </>
  );
}

export default App;
