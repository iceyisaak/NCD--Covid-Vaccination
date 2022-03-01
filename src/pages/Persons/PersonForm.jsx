import React from 'react';
import { v4 as uuidv4 } from 'uuid';

const PersonForm = () => {

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
        email: email.value,
        phone: phone.value,
        address: address.value,
        birthdate: birthdate.value,
        citizen_id: citizen_id.value,
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
    location.assign('/persons');

  };

  return (
    <form onSubmit={onSubmit} className='form'>
      <fieldset id="fieldset">
        <div style={{ display: 'flex', flexFlow: 'row wrap' }}>
          <label htmlFor="name" className='mb-1' >
            Name
          </label>
          <input
            autoComplete="off"
            id="name"
            className='form-input mb-1'
            placeholder='e.g. John Doe'
          />
          <label htmlFor="nationality" className='mb-1'>
            Nationality
          </label>
          <input
            autoComplete="off"
            id="nationality"
            className='form-input mb-1'
            placeholder='e.g. Italian'
          />
          <label htmlFor="photo" className='mb-1' >
            Email
          </label>
          <input
            autoComplete="off"
            id="email"
            className='form-input mb-1'
            placeholder='e.g. abc@efg.com'
            type='email'
          />
          <label htmlFor="photo" className='mb-1' >
            Phone
          </label>
          <input
            autoComplete="off"
            id="email"
            className='form-input mb-1'
            placeholder='e.g. ###-###-###'
          />
          <label htmlFor="birthdate" className='mb-1' >
            Birthdate
          </label>
          <input
            autoComplete="off"
            id="birthdate"
            className='form-input mb-1'
            placeholder='e.g. Intramuscular injection'
            type='date'
          />
          <label htmlFor="birthdate" className='mb-1' >
            Citizen ID
          </label>
          <input
            autoComplete="off"
            id="citizen_id"
            className='form-input mb-1'
            placeholder='e.g. Intramuscular injection'
            type='text'
          />
          <button className='btn mb-1' >
            Add
          </button>
        </div>
      </fieldset>
    </form >
  );
};

export default PersonForm;
