import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

const ViewVaccine = () => {

  const { vaccineId } = useParams();
  const navigate = useNavigate();
  const [vac, setVac] = useState({});

  // useEffect(async () => {
  //   const res = await window.contract.getVaccineByID({ id });
  //   setVac(res);
  // }, []);

  const fetchVac = async () => {
    const res = await window.contract.getVaccineByID({ id: vaccineId });
    setVac(res);
  };

  useEffect(() => {
    fetchVac();
  }, []);


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
