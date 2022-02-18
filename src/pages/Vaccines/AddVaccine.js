import React from 'react';
import VaccineForm from './VaccineForm';

const AddVaccine = (props) => {

  const { vaccines, setVaccines } = props;

  return (
    <div className=''>
      <h1>
        Add Vaccine
      </h1>
      <div className='margin-center'>
        <VaccineForm
          setVaccines={setVaccines}
          vaccines={vaccines}
        />
      </div>
    </div>
  );
};

export default AddVaccine;
