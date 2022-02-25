import React from 'react';
import { useNavigate } from 'react-router-dom';
import TransactionForm from './TransactionForm';

const TransactionAdd = (props) => {

  const { transactions, setTransactions, vaccineList, vaccinationSiteList, personList } = props;
  const navigate = useNavigate();

  return (
    <div className=''>
      <h1>
        Add Certificate
      </h1>
      <div className='margin-center'>
        <TransactionForm
          setTransactions={setTransactions}
          transactions={transactions}
          vaccineList={vaccineList}
          vaccinationSiteList={vaccinationSiteList}
          personList={personList}
        />
      </div>
      <button onClick={() => navigate('/transactions')}>
        Back
      </button>
    </div>
  );
};

export default TransactionAdd;
