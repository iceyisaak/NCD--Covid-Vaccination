import React from 'react';
import { Link } from 'react-router-dom';

const VaccinationSitesList = (props) => {

  const { vaccinationSiteList } = props;

  return (
    <div className='list'>
      <div className='header-box mb-4'>
        <h2 className='text-lg'>Vaccination Site List</h2>
        <span className='text-sm entry'>Total: {vaccinationSiteList.length} Entries</span>
      </div>
      {vaccinationSiteList.length === 0 ?
        <p>List is Empty</p> :
        <table className='table'>
          <tbody>
            {
              vaccinationSiteList.map((vS, i) =>
                <tr key={i}>
                  <td className='px-1'>
                    <Link to={`/vaccinationSites/${vS.id}`}>
                      {vS.name}
                    </Link>
                  </td>
                  <td className='px-1'>
                    <Link to={`/vaccinationSites/${vS.id}`}>
                      {vS.address}
                    </Link>
                  </td>
                  <td className='px-1'>
                    <Link to={`/vaccinationSites/${vS.id}`}>
                      {vS.type}
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

export default VaccinationSitesList;
