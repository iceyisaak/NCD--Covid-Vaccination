import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import CertificateList from './CertificateList';

const CertificatePage = () => {

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
        <button onClick={() => navigate('/addCertificate')} className='mx-1'>
          Add Certificate
        </button>
      </div>

      <CertificateList
        certificates={certificates}
        certificateList={certificateList}
        setCertificates={setCertificates}
      />

    </>
  );
};

export default CertificatePage;
