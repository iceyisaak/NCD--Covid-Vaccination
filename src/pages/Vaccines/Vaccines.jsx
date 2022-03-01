import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import VaccineList from './VaccineList';


const Vaccines = () => {

  const [vaccines, setVaccines] = useState('');
  const [vaccineList, setVaccineList] = useState([]);

  useEffect(() => {
    contract.getVaccines().then(setVaccineList);
  }, []);

  const navigate = useNavigate();

  return (
    <>
      <h1>
        VACCINE PAGE
      </h1>
      <div className='btn-row'>
        <button onClick={() => navigate('/')} className='mx-1'>
          Back
        </button>
        <button onClick={() => navigate('/addVaccine')}>
          Add Vaccine
        </button>
      </div>

      <VaccineList vaccines={vaccines} vaccineList={vaccineList} setVaccines={setVaccines} />

    </>
  );
};

export default Vaccines;
