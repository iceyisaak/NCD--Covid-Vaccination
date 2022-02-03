import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

const ViewCertificate = () => {

  const { certificateId } = useParams();
  const navigate = useNavigate();
  const [cer, setCer] = useState({});


  const fetchCert = async () => {
    const res = await window.contract.getCertificateByID({ id: certificateId });
    setCer(res);
  };

  useEffect(() => {
    fetchCert();
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
            {cer.country}
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

export default ViewCertificate;