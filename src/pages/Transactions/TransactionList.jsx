import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const TransactionList = (props) => {

  const { transactionList } = props;
  const [showData, setShowData] = useState([]);

  console.log('transactionList-1: ', transactionList);


  if (transactionList) {

    const res = contract.getTransactionByPersonID({ id: transactionList });
    if (res) {


      for (let i = 0; i < res.length; i++) {
        console.log('res: ', res);

        let vaccine = contract.getVaccineByID({ id: res[i].vaccine_id });
        console.log('vaccine: ', vaccine);
        res[i].vaccine_name = vaccine[0].name;

        let vaccination_site = contract.getVaccinationSiteByID({ id: res[i].vaccination_site_id });
        console.log('vaccination_site: ', vaccination_site);
        res[i].vaccination_site_name = vaccination_site[0].name;

        let person = contract.getPersonByID({ id: res[i].person_id });
        console.log('person: ', person);
        res[i].person_name = person[0].name;
      }
      setShowData(res);
    }
  }

  console.log('showData: ', showData);

  // const fetchTransactions = async (transactionList) => {

  //   console.log('fetchTransactions() ');
  //   console.log('transactionList[0].person_id: ', transactionList);
  //   // if (searchTerm !== '') {
  //   const res = await contract.getPersonByID({ id: transactionList.person_id });
  //   if (res) {
  //     console.log('res: ', res);
  //     // for (let i = 0; i < res.length; i++) {


  //     // }
  //     //     setSearchResult(res);
  //     //   } else {
  //     //     setSearchResult(null);
  //     //   }
  //   };
  // };

  // useEffect(() => {
  //   fetchTransactions();
  // }, []);

  return (
    <div className='list'>
      <div className='header-box mb-4'>
        <h2 className='text-lg'>Certificate List</h2>
        <span className='text-sm entry'>Total: {transactionList.length} Entries</span>
      </div>
      {transactionList.length === 0 ?
        <p>List is Empty</p> :
        <table className='table'>
          <tbody>
            <tr>
              <td>
                Person
              </td>
              <td>
                Vaccine
              </td>
              <td>
                Vaccination Site
              </td>
            </tr>
            {console.log('transactionList: ', transactionList),
              transactionList.map((t, i) =>
                <tr key={i}>
                  <td>
                    <Link to={`/transactions/${t.id}`}>
                      {t.person_id}
                    </Link>
                  </td>
                  <td>
                    <Link to={`/transactions/${t.id}`}>
                      {t.vaccine_id}
                    </Link>
                  </td>
                  <td>
                    <Link to={`/transactions/${t.id}`}>
                      {t.vaccination_site_id}
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

export default TransactionList;
