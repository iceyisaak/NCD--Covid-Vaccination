import React from 'react';
import { useNavigate } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';

const PersonForm = () => {

  const navigate = useNavigate();

  const onSubmit = async (e) => {
    e.preventDefault();

    const { nationality, name, photo, birthdate } = e.target.elements;

    try {

      fieldset.disable = true;
      // make an update call to the smart contract
      await window.contract.addPerson({
        // pass the value that the user entered in the greeting field
        id: uuidv4(),
        nationality: nationality.value,
        name: name.value,
        photo: photo.value,
        birthdate: birthdate.value,
      });
    } catch (e) {
      alert(
        'Something went wrong! ' +
        'Maybe you need to sign out and back in? ' +
        'Check your browser console for more info.'
      );
      throw e;
    } finally {
      // re-enable the form, whether the call succeeded or failed
      fieldset.disabled = false;
    }

    alert('New Person Added');
    navigate('/persons');

  };

  return (
    <form onSubmit={onSubmit} className='form'>
      <div style={{ display: 'flex', flexFlow: 'row wrap' }}>
        <fieldset id="fieldset">
          <label htmlFor="name" style={{
            display: 'block',
            color: 'var(--gray)',
            marginBottom: '0.5em'
          }}
          >
            Name
          </label>
          <input
            autoComplete="off"
            id="name"
            className='form-input mb-1'
            placeholder='e.g. John Doe'
          />
          <label
            htmlFor="nationality"
            style={{
              display: 'block',
              color: 'var(--gray)',
              marginBottom: '0.5em'
            }}
          >
            Nationality
          </label>
          <input
            autoComplete="off"
            id="nationality"
            className='form-input mb-1'
            placeholder='e.g. Italian'
          />
          <label
            htmlFor="photo"
            style={{
              display: 'block',
              color: 'var(--gray)',
              marginBottom: '0.5em'
            }}
          >
            Photo
          </label>
          <input id="photo" className='form-input mb-1' type='file' />
          <label
            htmlFor="birthdate"
            style={{
              display: 'block',
              color: 'var(--gray)',
              marginBottom: '0.5em'
            }}
          >
            Birthdate
          </label>
          <input
            autoComplete="off"
            id="birthdate"
            className='form-input mb-1'
            placeholder='e.g. Intramuscular injection'
            type='date'
          />

          <button
            className='btn mb-1'
          >
            Add
          </button>
          <button onClick={() => navigate('/persons')} className='btn'>
            Back
          </button>
        </fieldset>
      </div>
    </form >
  );
};

export default PersonForm;
