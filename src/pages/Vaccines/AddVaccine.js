import React from 'react';
import { useNavigate } from 'react-router-dom';
import VaccineForm from './VaccineForm';

const AddVaccine = (props) => {

  const { vaccines, setVaccines } = props;

  const navigate = useNavigate();


  return (
    <div className=''>
      <h1>
        Add Vaccine:
      </h1>
      <div className='margin-center'>
        <VaccineForm
          setVaccines={setVaccines}
          vaccines={vaccines}
        />
      </div>
      <button onClick={() => navigate('/vaccines')}>
        Back
      </button>
    </div>
  );
};

export default AddVaccine;
