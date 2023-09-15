import React from 'react';
import Todo from './components/Todo';

const App: React.FC = () => {
  const myItems = [
    { id: 1, title: 'first item' },
    { id: 2, title: 'second item' },
    { id: 3, title: 'third item' },
  ];
  return (
    <div>
      <Todo items={myItems} />
    </div>
  );
};

export default App;
