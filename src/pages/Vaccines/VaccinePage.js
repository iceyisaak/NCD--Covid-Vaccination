import React from 'react';
import { useNavigate } from 'react-router-dom';
import VaccineList from '../../components/Vaccines/VaccineList';

const VaccinePage = (props) => {

  const { vaccines, vaccineList, setVaccines } = props;

  const navigate = useNavigate();

  console.log(vaccineList);

  return (
    <>
      <h1>
        VACCINE PAGE
      </h1>
      <button onClick={() => navigate('/')}>
        Back
      </button>
      <button onClick={() => navigate('/addVaccine')}>
        Add Vaccine
      </button>

      <VaccineList vaccines={vaccines} vaccineList={vaccineList} setVaccines={setVaccines} />

    </>
  );
};

export default VaccinePage;
