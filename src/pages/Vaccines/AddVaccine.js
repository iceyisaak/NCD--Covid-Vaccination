import React from 'react';
import Form from '../../components/Form';

const AddVaccine = (props) => {

  const { vaccines, setVaccines, showNotification } = props;

  return (
    <div className=''>
      <h1>
        Add Vaccine
      </h1>
      <div className='margin-center'>
        <Form
          setVaccines={setVaccines}
          vaccines={vaccines}
          showNotification={showNotification}
        />
      </div>
    </div>
  );
};

export default AddVaccine;
