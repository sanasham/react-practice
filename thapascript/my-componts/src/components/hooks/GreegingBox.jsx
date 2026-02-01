import { useEffect, useState } from 'react';

const GreegingBox = ({ greeting }) => {
  const [greetingMessage, setGreetingMessage] = useState('');
  useEffect(() => {
    setGreetingMessage(greeting());
    console.log('use effect called');
  }, [greeting]);
  return (
    <div>
      <h1>{greetingMessage}</h1>
    </div>
  );
};

export default GreegingBox;
