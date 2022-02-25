import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

const TransactionDetails = () => {

  const { transactionId } = useParams();
  const navigate = useNavigate();
  const [cer, setCer] = useState({});

  const fetchTransaction = async () => {
    const res = await contract.getTransactionByID({ id: transactionId });
    setCer(res[0]);
  };

  useEffect(() => {
    fetchTransaction();
  }, []);


  return (
    <>
      {
        cer &&
        <div>
          <h1>View Certificate: <span>{cer.id}</span></h1>
          <p>
            {cer.id}
          </p>
          <p>
            {cer.person_id}
          </p>
          <p>
            {cer.vaccine_id}
          </p>
          <p>
            {cer.vaccination_site_id}
          </p>
          <p>
            {cer.application_date}
          </p>
          <p>
            {cer.vaccine_lot}
          </p>
          <p>
            {cer.digital_stamp}
          </p>
          <button onClick={() => navigate('/certificates')}>
            Back
          </button>
        </div>
      }
    </>
  );

};

export default TransactionDetails;
