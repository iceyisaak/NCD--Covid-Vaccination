import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import PersonList from './PersonList';

const PersonPage = (props) => {

  // const { persons, personList, setPersons } = props;

  const [persons, setPersons] = useState('');
  const [personList, setPersonList] = useState([]);

  useEffect(() => {
    contract.getPersons().then(setPersonList);
  }, []);


  const navigate = useNavigate();

  return (
    <>
      <h1>
        PERSON PAGE
      </h1>
      <div className="btn-row">
        <button onClick={() => navigate('/')} className='mx-1'>
          Back
        </button>
        <button onClick={() => navigate('/addPerson')}>
          Add Person
        </button>
      </div>

      <PersonList persons={persons} personList={personList} setPersons={setPersons} />

    </>
  );
};

export default PersonPage;
