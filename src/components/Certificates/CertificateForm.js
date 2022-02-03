import React from 'react';
import { useNavigate } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';

const CertificateForm = () => {

  const navigate = useNavigate();

  const onSubmit = async (e) => {
    e.preventDefault();

    const { vaccine_id, person_id, country, application_date, vaccine_lot } = e.target.elements;

    try {

      fieldset.disable = true;
      // make an update call to the smart contract
      await window.contract.addCertificate({
        // pass the value that the user entered in the greeting field
        id: uuidv4(),
        vaccine_id: vaccine_id.value,
        person_id: person_id.value,
        country: country.value,
        application_date: application_date.value,
        vaccine_lot: vaccine_lot.value,
        digital_stamp: uuidv4()
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

    alert('New Certificate Added');
    location.assign('/certificates');

  };

  return (
    <form onSubmit={onSubmit} className='form'>
      <div style={{ display: 'flex', flexFlow: 'row wrap' }}>
        <fieldset id="fieldset">
          <label
            htmlFor="person_id"
            style={{
              display: 'block',
              color: 'var(--gray)',
              marginBottom: '0.5em'
            }}
          >
            Person ID
          </label>
          <input
            autoComplete="off"
            id="person_id"
            className='form-input mb-1'
            placeholder='e.g. ###-###-###'
          />
          <label
            htmlFor="vaccine_id"
            style={{
              display: 'block',
              color: 'var(--gray)',
              marginBottom: '0.5em'
            }}
          >
            Vaccine ID
          </label>
          <input
            autoComplete="off"
            id="vaccine_id"
            className='form-input mb-1'
            placeholder='e.g. ###-###-###'
          />
          <label
            htmlFor="country"
            style={{
              display: 'block',
              color: 'var(--gray)',
              marginBottom: '0.5em'
            }}
          >
            Country
          </label>
          <input id="country" className='form-input mb-1' placeholder='e.g. Germany' />
          <label
            htmlFor="application_date"
            style={{
              display: 'block',
              color: 'var(--gray)',
              marginBottom: '0.5em'
            }}
          >
            Application Date
          </label>
          <input id="application_date" className='form-input mb-1' placeholder='e.g. Germany' type='date' />
          <label
            htmlFor="vaccine_lot"
            style={{
              display: 'block',
              color: 'var(--gray)',
              marginBottom: '0.5em'
            }}
          >
            Vaccine Lot
          </label>
          <input
            autoComplete="off"
            id="vaccine_lot"
            className='form-input mb-1'
            placeholder='e.g. ###-###-###'
            type='number'
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

export default CertificateForm;