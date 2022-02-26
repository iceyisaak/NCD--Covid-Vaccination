import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const TransactionList = (props) => {

  const { transactionList } = props;
  const [showData, setShowData] = useState([]);

  console.log('transactionList-1: ', transactionList);

  const fetchTransactions = async () => {
    const res = await contract.getTransactions({ id: transactionList });
    if (res) {
      for (let i = 0; i < res.length; i++) {

        let vaccine = await contract.getVaccineByID({ id: res[i].vaccine_id });
        console.log('vaccine: ', vaccine);
        res[i].vaccine_name = vaccine[0].name;

        let vaccination_site = await contract.getVaccinationSiteByID({ id: res[i].vaccination_site_id });
        console.log('vaccination_site: ', vaccination_site);
        res[i].vaccination_site_name = vaccination_site[0].name;

        let person = await contract.getPersonByID({ id: res[i].person_id });
        console.log('person: ', person);
        res[i].person_name = person[0].name;
      }
      setShowData(res);
    } else {
      setShowData(null);
    }
  };

  console.log('showData: ', showData);


  useEffect(() => {
    fetchTransactions();
  }, []);

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
            {transactionList.map((t, i) =>
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
