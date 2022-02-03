import React, { useState } from 'react';
import { Link, Route } from 'react-router-dom';

const PersonList = (props) => {

  const { personList } = props;

  return (

    <div className='list'>
      <div className='flex flex-wrap justify-between w-full mb-4'>
        <h2 className='text-lg'>Vaccine List</h2>
        <span className='text-sm entry'>Total: {personList.length} Entries</span>
      </div>
      {personList.length === 0 ?
        <p>List is Empty</p> :
        <table className='table'>
          <tbody className=''>
            {personList.map((p, i) =>
              <tr key={i} className=''>
                <td>
                  <Link to={`/persons/${p.id}`}>
                    <label htmlFor={`${i}`}>{p.name}</label>
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

export default PersonList;
