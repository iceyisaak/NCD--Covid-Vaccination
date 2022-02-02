import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

const ViewVaccine = (props) => {

  // const { vaccineList } = props;

  const { id } = useParams();
  const navigate = useNavigate();
  const [vac, setVac] = useState({});

  // const vac = vaccineList.find(v => (v.id).toString() === id);
  // const vac = window.contract.getVaccineByID(id);
  // const vacc = window.contract.getVaccineByID({ id });
  // setVac(vacc);

  useEffect(async () => {
    const res = await window.contract.getVaccineByID({ id });
    setVac(res);
  }, []);



  console.log('id:', id);
  console.log('vac:', vac);

  return (
    <>
      {
        vac &&
        <div>
          <h1>View Vaccine: <span>{vac.id}</span></h1>
          <p>
            {vac.name}
          </p>
          <p>
            {vac.manufacturer}
          </p>
          <p>
            {vac.type}
          </p>
          <p>
            {vac.administration}
          </p>
          <p>
            {vac.dose}
          </p>
          <button onClick={() => navigate('/vaccines')}>
            Back
          </button>
        </div>
      }
    </>
  );

};

export default ViewVaccine;
