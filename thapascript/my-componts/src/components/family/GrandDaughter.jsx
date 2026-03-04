import React, { useContext } from 'react';
import { FamilyContext } from './FamilyContext'; // Adjust the path if needed

const GrandDaughter = () => {
  const secret = useContext(FamilyContext);
  return (
    <div className='border-2 border-yellow-400 rounded-md p-6 mt-2 text-center'>
      <p className='text-sm font-medium text-gray-700'>
        {secret.onlyParentCanSee()}
      </p>
    </div>
  );
};

export default React.memo(GrandDaughter);
