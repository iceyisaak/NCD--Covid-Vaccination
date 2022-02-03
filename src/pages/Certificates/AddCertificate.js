import React from 'react';
import CertificateForm from '../../components/Certificates/CertificateForm';

const AddCertificate = (props) => {

  const { certificates, setCertificates } = props;

  return (
    <div className=''>
      <h1>
        Add Certificate
      </h1>
      <div className='margin-center'>
        <CertificateForm
          setCertificates={setCertificates}
          certificates={certificates}
        />
      </div>
    </div>
  );
};

export default AddCertificate;
