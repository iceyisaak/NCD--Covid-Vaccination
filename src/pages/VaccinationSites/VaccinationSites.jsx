import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import VaccinationSitesList from './VaccinationSitesList';

import '../../styles/global.scss';

const VaccinationSites = () => {

  const [vaccinationSite, setTransactions] = useState('');
  const [vaccinationSiteList, setVaccinationSiteList] = useState([]);

  useEffect(() => {
    contract.getVaccinationSites().then(setVaccinationSiteList);
  }, []);

  const navigate = useNavigate();

  return (
    <>
      <h1>
        VACCIATION SITES
      </h1>
      <div className="btn-row">
        <button onClick={() => navigate('/')} className='mx-1'>
          Back
        </button>
        <button onClick={() => navigate('/addVaccinationSite')} className='mx-1'>
          Add Vaccination Site
        </button>
      </div>

      <VaccinationSitesList
        vaccinationSite={vaccinationSite}
        vaccinationSiteList={vaccinationSiteList}
        setTransactions={setTransactions}
      />

    </>
  );
};

export default VaccinationSites;
