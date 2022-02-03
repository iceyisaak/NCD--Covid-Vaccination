import React from 'react';
import { Link } from 'react-router-dom';

const CertificateList = (props) => {

  const { certificateList } = props;

  return (

    <div className='list'>
      <div className='flex flex-wrap justify-between w-full mb-4'>
        <h2 className='text-lg'>Certificate List</h2>
        <span className='text-sm entry'>Total: {certificateList.length} Entries</span>
      </div>
      {certificateList.length === 0 ?
        <p>List is Empty</p> :
        <table className='table'>
          <tbody className=''>
            {certificateList.map((c, i) =>
              <tr key={i} className=''>
                <td>
                  <Link to={`/certificates/${c.id}`}>
                    <label htmlFor={`${i}`}>{c.person_id}</label>
                  </Link>
                </td>
                <td>
                  <Link to={`/certificates/${c.id}`}>
                    <label htmlFor={`${i}`}>{c.country}</label>
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

export default CertificateList;
