// import { useState } from 'react';
import './App.css';
import { FamilyContext } from './components/family/FamilyContext';
import Parent from './components/family/Parent';

const familySecret = {
  familyName: 'Sayyed',
  onlyParentCanSee: () => {
    return 'This is a family secret!';
  },
  onlyGrandChildShouldKnow: () => {
    return 'This is a grand child secret!';
  },
};

function App() {
  // const [count, setCount] = useState(0);
  // const increment = () => {
  //   setCount(count + 1);
  // };

  return (
    <FamilyContext.Provider value={familySecret}>
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
      {/* <FindUser /> */}
      {/* <UseRef /> */}
      {/* <UseRef1 /> */}
      <Parent />
      {/* <UseCallback /> */}
      {/* <UseMemo /> */}
    </FamilyContext.Provider>
  );
}

export default App;
