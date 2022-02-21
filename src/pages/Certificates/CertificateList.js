import React from 'react';
import { Link } from 'react-router-dom';

const CertificateList = (props) => {

  const { certificateList } = props;

  return (
    <div className='list'>
      <div className='header-box mb-4'>
        <h2 className='text-lg'>Certificate List</h2>
        <span className='text-sm entry'>Total: {certificateList.length} Entries</span>
      </div>
      {certificateList.length === 0 ?
        <p>List is Empty</p> :
        <table className='table'>
          <tbody>
            {certificateList.map((c, i) =>
              <tr key={i}>
                <td>
                  <Link to={`/certificates/${c.id}`}>
                    {c.person_id}
                  </Link>
                </td>
                <td>
                  <Link to={`/certificates/${c.id}`}>
                    {c.country}
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
