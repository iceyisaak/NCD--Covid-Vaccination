import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

const ViewPerson = () => {

  const { personId } = useParams();
  const navigate = useNavigate();
  const [pers, setPers] = useState({});

  const fetchPers = async () => {
    const res = await window.contract.getPersonByID({ id: personId });
    setPers(res[0]);
  };

  useEffect(() => {
    fetchPers();
  }, []);

  return (
    <>
      {
        pers &&
        <div>
          <h1>View Person: </h1>
          <p>
            {pers.name}
          </p>
          <p>
            {pers.nationality}
          </p>
          <p>
            {pers.photo}
          </p>
          <p>
            {pers.birthdate}
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
