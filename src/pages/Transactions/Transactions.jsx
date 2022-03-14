import React from 'react';
import { useNavigate } from 'react-router-dom';
import TransactionList from './TransactionList';

const Transactions = () => {

  const navigate = useNavigate();

  return (
    <>
      <h1>
        TRANSACTIONS PAGE
      </h1>
      <div className="btn-row">
        <button onClick={() => navigate('/')} className='mx-1'>
          Back
        </button>
        <button onClick={() => navigate('/searchTransactionByPerson')} className='mx-1'>
          Search By Person
        </button>
        <button onClick={() => navigate('/searchTransactionByVaccine')} className='mx-1'>
          Search By Vaccine
        </button>
        <button onClick={() => navigate('/searchTransactionByVaccinationSite')} className='mx-1'>
          Search By Vaccination Site
        </button>
        <button onClick={() => navigate('/addTransaction')} className='mx-1'>
          Add Transaction
        </button>
      </div>
      <TransactionList />
    </>
  );
};

export default Transactions;
