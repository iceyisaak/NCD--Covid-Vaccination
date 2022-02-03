import React from 'react';
import { useNavigate } from 'react-router-dom';
import CertificateList from '../../components/Certificates/CertificateList';

const CertificatePage = (props) => {

  const { certificates, certificateList, setCertificates } = props;

  const navigate = useNavigate();

  return (
    <>
      <h1>
        CERTIFICATE PAGE
      </h1>
      <button onClick={() => navigate('/')}>
        Back
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
