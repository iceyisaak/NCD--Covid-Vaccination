import React from 'react';
import { useNavigate } from 'react-router-dom';
import VaccinationSitesForm from './VaccinationSitesForm';

const VaccinationSitesAdd = (props) => {

  const { transactions, setTransactions, vaccineList, personList } = props;
  const navigate = useNavigate();

  return (
    <div className=''>
      <h1>
        Add Certificate
      </h1>
      <div className='margin-center'>
        <VaccinationSitesForm
          setTransactions={setTransactions}
          transactions={transactions}
          vaccineList={vaccineList}
          personList={personList}
        />
      </div>
      <button onClick={() => navigate('/vaccinationSites')}>
        Back
      </button>
    </div>
  );
};

export default VaccinationSitesAdd;
