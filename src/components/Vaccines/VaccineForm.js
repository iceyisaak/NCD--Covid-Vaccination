import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';

const VaccineForm = (props) => {

  const navigate = useNavigate();

  const onSubmit = async (e) => {
    e.preventDefault();

    const { name, manufacturer, type, administration, dose } = e.target.elements;

    try {

      fieldset.disable = true;
      // make an update call to the smart contract
      await window.contract.addVaccine({
        // pass the value that the user entered in the greeting field
        id: uuidv4(),
        name: name.value,
        manufacturer: manufacturer.value,
        type: type.value,
        administration: administration.value,
        dose: dose.value
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

    alert('New Vaccine Added');
    navigate('/vaccines');

  };

  return (
    <form onSubmit={onSubmit} className='form'>
      <fieldset id="fieldset">
        <label
          htmlFor="vaccine"
          style={{
            display: 'block',
            color: 'var(--gray)',
            marginBottom: '0.5em'
          }}
        >
          Add Vaccine
        </label>
        <div style={{ display: 'flex', flexFlow: 'row wrap' }}>
          <input
            autoComplete="off"
            id="name"
            className='form-input mb-1'
            placeholder='e.g. Comirnaty'
          />
          <input
            autoComplete="off"
            id="manufacturer"
            className='form-input mb-1'
            placeholder='e.g. Pfizer-BionTech'
          />
          <input
            autoComplete="off"
            id="type"
            className='form-input mb-1'
            placeholder='e.g. RNA'
          />
          <input
            autoComplete="off"
            id="administration"
            className='form-input mb-1'
            placeholder='e.g. Intramuscular injection'
          />
          <input
            autoComplete="off"
            id="dose"
            className='form-input mb-1'
            placeholder='Dose'
          />

        </div>
        <button
          className='btn mb-1'
        >
          Add
        </button>
        <button onClick={() => navigate('/vaccines')} className='btn'>
          Back
        </button>
      </fieldset>
    </form>
  );
};

export default VaccineForm;
