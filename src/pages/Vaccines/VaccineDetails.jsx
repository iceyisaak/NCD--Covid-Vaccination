import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

import '../../styles/global.scss';

const VaccineDetails = () => {

  const { vaccineId } = useParams();
  const navigate = useNavigate();
  const [vac, setVac] = useState({});

  const fetchVac = async () => {
    const res = await contract.getVaccineByID({ id: vaccineId });
    setVac(res[0]);
  };

  useEffect(() => {
    fetchVac();
  }, []);


  return (
    <>
      {
        vac &&
        <>
          <div className='list'>
            <h1>View Vaccine: </h1>
            <table className="table">
              <tbody>
                <tr>
                  <td className='row-name px-1'>
                    Vaccine Name
                  </td>
                  <td className='px-1'>
                    {vac.name}
                  </td>
                </tr>
                <tr>
                  <td className='row-name px-1'>
                    Manufacturer
                  </td>
                  <td className='px-1'>
                    {vac.manufacturer}
                  </td>
                </tr>

                <tr>
                  <td className='row-name px-1'>
                    Type
                  </td>
                  <td className='px-1'>
                    {vac.type}
                  </td>
                </tr>
                <tr>
                  <td className='row-name px-1'>
                    Vaccind ID
                  </td>
                  <td className='px-1'>
                    {vac.id}
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <button onClick={() => navigate('/vaccines')}>
            Back
          </button>
        </>
      }

    </>
  );

};

export default VaccineDetails;
