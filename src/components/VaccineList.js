import React, { useState } from 'react';

const VaccineList = (props) => {

  const { vaccineList } = props;

  return (

    <>
      <div className='flex flex-wrap justify-between w-full mb-4'>
        <h2 className='text-lg'>Vaccine List</h2>
        <span className='text-sm'>Total: {vaccineList.length} Entries</span>
      </div>
      {vaccineList.length === 0 ?
        <p>Tasklist is Empty</p> :
        <table className='table table-auto'>
          <tbody className=''>
            {vaccineList.map((v, i) =>
              <tr key={i} className=''>
                <td>
                  <label htmlFor={`${i}`}>{v.id}</label>
                </td>
                <td>
                  <label htmlFor={`${i}`}>{v.name}</label>
                </td>
                <td>
                  <label htmlFor={`${i}`}>{v.manufacturer}</label>
                </td>
                <td>
                  <label htmlFor={`${i}`}>{v.type}</label>
                </td>
                <td>
                  <label htmlFor={`${i}`}>{v.administration}</label>
                </td>
                <td>
                  <label htmlFor={`${i}`}>{v.dose}</label>
                </td>
              </tr>
            )}
          </tbody>
        </table>
      }
    </>
  );
};

export default VaccineList;
