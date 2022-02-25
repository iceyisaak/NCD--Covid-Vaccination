import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

import '../../styles/global.scss';

const VaccinationSitesDetails = () => {

  const { vaccinationSiteId } = useParams();
  const navigate = useNavigate();
  const [vacSite, setVacSite] = useState({});

  const fetchVaccinationSite = async () => {
    const res = await contract.getVaccinationSiteByID({ id: vaccinationSiteId });
    setVacSite(res[0]);
  };

  useEffect(() => {
    fetchVaccinationSite();
  }, []);


  return (
    <>
      {
        vacSite &&
        <>
          <div className='list'>
            <h1>View Vaccination Site: </h1>
            <table className="table">
              <tbody>

                <tr>
                  <td className='row-name px-1'>
                    Name
                  </td>
                  <td className='px-1'>
                    {vacSite.name}
                  </td>
                </tr>

                <tr>
                  <td className='row-name px-1'>
                    Address
                  </td>
                  <td className='px-1'>
                    {vacSite.address}
                  </td>
                </tr>
                <tr>
                  <td className='row-name px-1'>
                    Vaccind ID
                  </td>
                  <td className='px-1'>
                    {vacSite.type}
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <button onClick={() => navigate('/vaccinationSites')}>
            Back
          </button>
        </>
      }
    </>
  );

};

export default VaccinationSitesDetails;


