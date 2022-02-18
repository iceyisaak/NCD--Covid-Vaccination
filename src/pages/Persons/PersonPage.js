import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import PersonList from './PersonList';

const PersonPage = (props) => {

  // const { persons, personList, setPersons } = props;

  const [persons, setPersons] = useState('');
  const [personList, setPersonList] = useState([]);

  useEffect(() => {
    window.contract.getPersons().then(setPersonList);
  }, []);


  const navigate = useNavigate();

  return (
    <>
      <h1>
        PERSON PAGE
      </h1>
      <button onClick={() => navigate('/')}>
        Back
      </button>
      <button onClick={() => navigate('/addPerson')}>
        Add Person
      </button>

      <PersonList persons={persons} personList={personList} setPersons={setPersons} />

    </>
  );
};

export default PersonPage;
