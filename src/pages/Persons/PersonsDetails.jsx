import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

import '../../styles/global.scss';

const PersonsDetails = () => {

  const { personId } = useParams();
  const navigate = useNavigate();
  const [pers, setPers] = useState({});

  const fetchPers = async () => {
    const res = await window.contract.getPersonByID({ id: personId });
    setPers(res[0]);
  };

  useEffect(() => {
    fetchPers();
  }, []);

  return (
    <>
      {console.log('pers: ', pers),
        pers &&
        <>
          <div className='list'>
            <h1>View Person: </h1>
            <table className="table">
              <tbody>
                <tr>
                  <td className='row-name px-1'>
                    Name
                  </td>
                  <td className='px-1'>
                    {pers.name}
                  </td>
                </tr>
                <tr>
                  <td className='row-name px-1'>
                    Nationality
                  </td>
                  <td className='px-1'>
                    {pers.nationality}
                  </td>
                </tr>
                <tr>
                  <td className='row-name px-1'>
                    Email
                  </td>
                  <td className='px-1'>
                    {pers.email}
                  </td>
                </tr>
                <tr>
                  <td className='row-name px-1'>
                    Phone
                  </td>
                  <td className='px-1'>
                    {pers.phone}
                  </td>
                </tr>
                <tr>
                  <td className='row-name px-1'>
                    Address
                  </td>
                  <td className='px-1'>
                    {pers.address}
                  </td>
                </tr>
                <tr>
                  <td className='row-name px-1'>
                    Birthdate
                  </td>
                  <td className='px-1'>
                    {pers.birthdate}
                  </td>
                </tr>
                <tr>
                  <td className='row-name px-1'>
                    Citizen ID
                  </td>
                  <td className='px-1'>
                    {pers.citizen_id}
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <button onClick={() => navigate('/persons')}>
            Back
          </button>
        </>
      }
    </>
  );

};

export default PersonsDetails;
