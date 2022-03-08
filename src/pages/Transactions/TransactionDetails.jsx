import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

const TransactionDetails = () => {

  const { transactionId } = useParams();
  const navigate = useNavigate();
  // const [cer, setCer] = useState({});
  const [transaction, setTransaction] = useState({});

  // const fetchTransaction = async () => {
  //   const res = await contract.getTransactionByID({ id: transactionId });
  //   setCer(res[0]);
  // };

  const fetchTransaction = async () => {
    // if (searchTerm !== '') {
    console.log('transactionId: ', transactionId);
    // const res = await contract.getTransactionsByPersonID({ id: transactionId });
    const res = await contract.getTransactionByID({ id: transactionId });
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
      setTransaction(res);
    } else {
      setTransaction(null);
    }
    // }
  };

  useEffect(() => {
    fetchTransaction();
  }, []);


  return (
    <>
      {console.log('transaction: ', transaction)}
      {
        transaction &&
        <>
          <div className='list'>
            <h1>View Certificate: </h1>
            <table className="table">
              <tbody>
                <tr>
                  <td className='row-name px-1'>
                    Certificate ID:
                  </td>
                  <td>
                    {transaction.id}
                  </td>
                </tr>
                <tr>
                  <td className="row-name px-1">
                    Person
                  </td>
                  <td>
                    {transaction.person_name}
                  </td>
                </tr>
                <tr>
                  <td className="row-name px-1">
                    Vaccine
                  </td>
                  <td>
                    {transaction.vaccine_name}
                  </td>
                </tr>
                <tr>
                  <td className="row-name px-1">
                    Vaccination Site
                  </td>
                  <td>
                    {transaction.vaccination_site_name}
                  </td>
                </tr>
                <tr>
                  <td className="row-name px-1">
                    Date
                  </td>
                  <td>
                    {transaction.application_date}
                  </td>
                </tr>
                <tr>
                  <td className="row-name px-1">
                    Vaccination Lot
                  </td>
                  <td>
                    {transaction.vaccine_lot}
                  </td>
                </tr>
                <tr>
                  <td className="row-name px-1">
                    Digital Stamp
                  </td>
                  <td>
                    {transaction.digital_stamp}
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <button onClick={() => navigate('/transactions')}>
            Back
          </button>
        </>
      }
    </>
  );

};

export default TransactionDetails;
