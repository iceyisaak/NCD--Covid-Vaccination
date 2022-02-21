import React from 'react';
import { useNavigate } from 'react-router-dom';
import CertificateForm from './CertificateForm';

const AddCertificate = (props) => {

  const { certificates, setCertificates, vaccineList, personList } = props;
  const navigate = useNavigate();

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
      <button onClick={() => navigate('/certificates')}>
        Back
      </button>
    </div>
  );
};

export default AddCertificate;
