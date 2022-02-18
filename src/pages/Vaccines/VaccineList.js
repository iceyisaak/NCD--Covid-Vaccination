import React from 'react';
import { Link } from 'react-router-dom';

const VaccineList = (props) => {

  const { vaccineList } = props;

  return (

    <div className='list'>
      <div className='flex flex-wrap justify-between w-full mb-4'>
        <h2 className='text-lg'>Vaccine List</h2>
        <span className='text-sm entry'>Total: {vaccineList.length} Entries</span>
      </div>
      {vaccineList.length === 0 ?
        <p>List is Empty</p> :
        <table className='table'>
          <tbody className=''>
            {vaccineList.map((v, i) =>
              <tr key={i} className=''>
                <td>
                  <Link to={`/vaccines/${v.id}`}>
                    <label htmlFor={`${i}`}>{v.name}</label>
                  </Link>
                </td>
              </tr>
            )}
          </tbody >
        </table >
      }
    </div>
  );
};

export default VaccineList;
