import React from 'react';
import { Link } from 'react-router-dom';
import VaccineList from '../../components/VaccineList';

const VaccinePage = (props) => {

  const { vaccines, vaccineList, setVaccines } = props;

  return (
    <>
      <h1>
        VACCINE PAGE
      </h1>
      <Link to='/addVaccine'>
        <button>
          Add Vaccine
        </button>
      </Link>

      <VaccineList
        vaccines={vaccines}
        vaccineList={vaccineList}
        setVaccines={setVaccines}
      />

    </>
  );
};

export default VaccinePage;
