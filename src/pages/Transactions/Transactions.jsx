import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import TransactionList from './TransactionList';

const Transactions = () => {

  const [transactions, setTransactions] = useState('');
  const [transactionList, setTransactionList] = useState([]);

  // const fetchTransactionByPersonID = async () => {
  //   console.log('searchTerm: ', searchTerm);
  //   if (searchTerm !== '') {
  //     const res = await contract.getTransactionByPersonID({ id: searchTerm });
  //     if (res) {
  //       for (let i = 0; i < res.length; i++) {

  //         let vaccine = await contract.getVaccineByID({ id: res[i].vaccine_id });
  //         console.log('vaccine: ', vaccine);
  //         res[i].vaccine_name = vaccine[0].name;

  //         let vaccination_site = await contract.getVaccinationSiteByID({ id: res[i].vaccination_site_id });
  //         console.log('vaccination_site: ', vaccination_site);
  //         res[i].vaccination_site_name = vaccination_site[0].name;

  //         let person = await contract.getPersonByID({ id: res[i].person_id });
  //         console.log('person: ', person);
  //         res[i].person_name = person[0].name;
  //       }
  //       setSearchResult(res);
  //     } else {
  //       setSearchResult(null);
  //     }
  //   }
  // };


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
