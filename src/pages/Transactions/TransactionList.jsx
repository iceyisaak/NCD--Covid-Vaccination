import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const TransactionList = () => {

  const [showData, setShowData] = useState([]);

  const fetchTransactions = async () => {
    const res = await contract.getTransactions();
    if (res) {
      for (let i = 0; i < res.length; i++) {

        let vaccine = await contract.getVaccineByID({ id: res[i].vaccine_id });
        res[i].vaccine_name = vaccine[0].name;

        let vaccination_site = await contract.getVaccinationSiteByID({ id: res[i].vaccination_site_id });
        res[i].vaccination_site_name = vaccination_site[0].name;

        let person = await contract.getPersonByID({ id: res[i].person_id });
        res[i].person_name = person[0].name;
      }
      setShowData(res);
    }
  };


  useEffect(() => {
    fetchTransactions();
  }, []);

  return (
    <div className='list'>
      <div className='header-box mb-4'>
        <h2 className='text-lg'>Transaction List</h2>
        <span className='text-sm entry'>Total: {showData.length} Entries</span>
      </div>
      {showData.length === 0 ?
        <p>List is Empty</p> :
        <table className='table'>
          <thead className='table-head'>
            <tr>
              <td className='px-1'>Person Name</td>
              <td className='px-1'>Vaccine</td>
              <td className='px-1'>Vaccination Site</td>
              <td className='px-1'>Date</td>
              <td className='px-1'>Vaccine Lot</td>
            </tr>
          </thead>
          <tbody>
            {showData.map((t, i) =>
              <tr key={i}>
                <td className='px-1'>
                  <Link to={`/transactions/${t.id}`}>
                    {t.person_name}
                  </Link>
                </td>
                <td className='px-1'>
                  <Link to={`/transactions/${t.id}`}>
                    {t.vaccine_name}
                  </Link>
                </td>
                <td className='px-1'>
                  <Link to={`/transactions/${t.id}`}>
                    {t.vaccination_site_name}
                  </Link>
                </td>
                <td className='px-1'>
                  <Link to={`/transactions/${t.id}`}>
                    {t.application_date}
                  </Link>
                </td>
                <td className='px-1'>
                  <Link to={`/transactions/${t.id}`}>
                    {t.vaccine_lot}
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
