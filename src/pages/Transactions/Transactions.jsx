import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import TransactionList from './TransactionList';

const Transactions = () => {

  const [transactions, setTransactions] = useState('');
  const [transactionList, setTransactionList] = useState([]);

  useEffect(() => {
    contract.getTransactions().then(setTransactionList);
  }, []);

  const navigate = useNavigate();

  return (
    <>
      <h1>
        CERTIFICATE PAGE
      </h1>
      <div className="btn-row">
        <button onClick={() => navigate('/')} className='mx-1'>
          Back
        </button>
        <button onClick={() => navigate('/searchCertificateByPerson')} className='mx-1'>
          Search Certificate By Person
        </button>
        <button onClick={() => navigate('/searchCertificateByVaccine')} className='mx-1'>
          Search Certificate By Vaccine
        </button>
        <button onClick={() => navigate('/searchCertificateByCountry')} className='mx-1'>
          Search Certificate By Country
        </button>
        <button onClick={() => navigate('/addTransaction')} className='mx-1'>
          Add Certificate
        </button>
      </div>

      <TransactionList
        transactions={transactions}
        transactionList={transactionList}
        setTransactions={setTransactions}
      />

    </>
  );
};

export default Transactions;
