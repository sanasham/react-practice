import React from 'react';
import GrandDaughter from './GrandDaughter';
import GrandSon from './GrandSon';
const Child = ({ header }) => {
  console.log('child rendered');
  return (
    <div className='border-2 border-indigo-400 rounded-md p-6 text-center'>
      <h2 className='text-xl font-bold mb-3'>{header}</h2>

      <p className='text-gray-600 text-sm leading-relaxed'>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vulputate,
        ipsum eu dignissim lacinia, nisi nisl aliquam eros, eget aliquet nunc
        nisl eu urna.
      </p>
      <GrandSon />
      <GrandDaughter />
    </div>
  );
};

export default React.memo(Child);
