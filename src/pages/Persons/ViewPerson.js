import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

const ViewPerson = () => {

  const { personID } = useParams();
  const navigate = useNavigate();
  const [pers, setPers] = useState({});

  const fetchPers = async () => {
    const res = await window.contract.getPersonByID({ personID });
    setPers(res);
  };

  useEffect(() => {
    fetchPers();
  }, []);


  return (
    <>
      {
        pers &&
        <div>
          <h1>View Vaccine: <span>{pers.id}</span></h1>
          <p>
            {pers.name}
          </p>
          <p>
            {pers.manufacturer}
          </p>
          <p>
            {pers.type}
          </p>
          <p>
            {pers.administration}
          </p>
          <p>
            {pers.dose}
          </p>
          <button onClick={() => navigate('/persons')}>
            Back
          </button>
        </div>
      }
    </>
  );

};

export default ViewPerson;
