import { useState } from 'react';
import data from './data.json';

function DisplayJson() {
  const [initialData, setInitialData] = useState(data);
  let entries = Object.entries(initialData);
  // const thValues = () => {
  //   for (let i of initialData) {
  //     console.log(Object.keys(i));
  //   }
  // };
  // thValues();
  return (
    <div>
      <table className="relative overflow-x-auto shadow-md sm:rounded-lg">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
          <tr className="row">
            {initialData.map((val, index) => {
              let keyValue = Object.keys(val).split(',');
              console.log('my key value: ' + keyValue);
              for (let x in keyValue) {
                console.log(x);
              }
              return (
                <th key={keyValue + index} className="px-6 py-3">
                  {keyValue}
                </th>
              );
            })}
          </tr>
        </thead>
        <tbody>
          <tr></tr>
        </tbody>
      </table>
    </div>
  );
}

export default DisplayJson;
