import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import CertificateList from './CertificateList';

const CertificatePage = (props) => {

  // const { certificates, certificateList, setCertificates } = props;

  const [certificates, setCertificates] = useState('');
  const [certificateList, setCertificateList] = useState([]);

  useEffect(() => {
    contract.getCertificates().then(setCertificateList);
  }, []);

  const navigate = useNavigate();

  return (
    <>
      <h1>
        CERTIFICATE PAGE
      </h1>
      <button onClick={() => navigate('/')}>
        Back
      </button>
      <button onClick={() => navigate('/searchCertificateByPerson')}>
        Search Certificate By Person
      </button>
      <button onClick={() => navigate('/searchCertificateByVaccine')}>
        Search Certificate By Vaccine
      </button>
      <button onClick={() => navigate('/searchCertificateByCountry')}>
        Search Certificate By Country
      </button>
      <button onClick={() => navigate('/addCertificate')}>
        Add Certificate
      </button>

      <CertificateList
        certificates={certificates}
        certificateList={certificateList}
        setCertificates={setCertificates}
      />

    </>
  );
};

export default CertificatePage;
