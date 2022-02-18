import React from 'react';
import PersonForm from './PersonForm';

const AddPerson = (props) => {

  const { persons, setPersons } = props;

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
    </div>
  );
};

export default AddPerson;
