import { useMemo, useState } from 'react';

const getAnalyticsData = (users) => {
  console.log('Calculating analytics data...');
  // Simulate a heavy computation
  let total = users.length;
  for (let i = 0; i < 10; i++) {
    total += i;
  }
  return total;
};
const UseMemo = () => {
  const [users, setUsers] = useState([]);
  // const getAgeData = getAnalyticsData(users);
  const getAgeData = useMemo(() => getAnalyticsData(users), [users]);

  return (
    <div>
      <p>Analytics Data: {getAgeData}</p>
      <button
        className='border-2 p-2 border-amber-500 rounded-md bg-indigo-400'
        onClick={() =>
          setUsers([
            ...users,
            { id: users.length + 1, name: `User ${users.length + 1}` },
          ])
        }
      >
        Add User
      </button>
    </div>
  );
};

export default UseMemo;
