import React from 'react';
import CertificateForm from './CertificateForm';

const AddCertificate = (props) => {

  const { certificates, setCertificates, vaccineList, personList } = props;

  return (
    <div className=''>
      <h1>
        Add Certificate
      </h1>
      <div className='margin-center'>
        <CertificateForm
          setCertificates={setCertificates}
          certificates={certificates}
          vaccineList={vaccineList}
          personList={personList}
        />
      </div>
    </div>
  );
};

export default AddCertificate;
