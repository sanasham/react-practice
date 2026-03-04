import { useContext } from 'react';
import { FamilyContext } from './FamilyContext';
const GrandSon = () => {
  const secret = useContext(FamilyContext);
  return (
    <div className='border-2 border-pink-400 rounded-md p-6 text-center'>
      <p className='text-sm font-medium text-gray-700'>
        {secret.onlyGrandChildShouldKnow()}
      </p>
    </div>
  );
};

export default GrandSon;
