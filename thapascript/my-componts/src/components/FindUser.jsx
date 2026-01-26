import { useState } from 'react';
import GithubUser from './GithubUser';

const FindUser = () => {
  const [userName, setUserName] = useState('');
  const isSearchInitiated = userName.trim().length > 0;
  const handleChange = (e) => {
    setUserName(e.target.value);
  };

  return (
    <div className='min-h-screen flex items-center justify-center bg-gray-100'>
      <div className='w-full max-w-md bg-white p-6 rounded-lg shadow-md text-center'>
        <h1 className='text-2xl font-semibold mb-4'>Find User</h1>

        <input
          type='text'
          placeholder='Enter username'
          value={userName}
          onChange={handleChange}
          className='w-full px-4 py-2 border border-gray-300 rounded-md 
                     focus:outline-none focus:ring-2 focus:ring-blue-500'
        />
        {!isSearchInitiated && (
          <p className='mt-4 text-gray-500 font-medium'>
            Please Initiate a Search!!!
          </p>
        )}
        {isSearchInitiated && <GithubUser username={userName} />}
      </div>
    </div>
  );
};

export default FindUser;
