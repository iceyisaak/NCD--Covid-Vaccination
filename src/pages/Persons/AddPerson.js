import React from 'react';
import { useNavigate } from 'react-router-dom';
import PersonForm from './PersonForm';

const AddPerson = (props) => {

  const { persons, setPersons } = props;
  const navigate = useNavigate();

  return (
    <div className=''>
      <h1>
        Add Person
      </h1>
      <div className='margin-center'>
        <PersonForm
          setPersons={setPersons}
          persons={persons}
        />
      </div>
      <button onClick={() => navigate('/persons')} >
        Back
      </button>
    </div>
  );
};

export default AddPerson;
