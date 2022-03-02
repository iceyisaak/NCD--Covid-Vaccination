import React from 'react';
import { useNavigate } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';


const VaccinationSitesForm = (props) => {

  const { vaccineList, personList } = props;
  const navigate = useNavigate();

  const onSubmit = async (e) => {
    e.preventDefault();

    const { name, address, type } = e.target.elements;

    try {

      fieldset.disable = true;
      // make an update call to the smart contract
      await window.contract.addVaccinationSite({
        // pass the value that the user entered in the greeting field
        id: uuidv4(),
        name: name.value,
        address: address.value,
        type: type.value
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
    alert('New Vaccination Site Added');
    navigate('/vaccinationSites');
  };

  return (
    <form onSubmit={onSubmit} className='form'>
      <fieldset id="fieldset">
        <div style={{ display: 'flex', flexFlow: 'row wrap' }}>
          <label htmlFor="name" className='mb-1'>
            Name
          </label>
          <input id="name" className='form-input mb-1' placeholder='e.g. St. Tom Hospital' />
          <label htmlFor="address" className='mb-1'>
            Address
          </label>
          <input id="address" className='form-input mb-1' placeholder='e.g. Germany' />
          <label htmlFor="type" className='mb-1'>
            Type
          </label>
          <select name="type" id="type" className='form-input mb-1'>
            <option value="Public Hospital">Public Hospital</option>
            <option value="Private Hospital / Clinique">Private Hospital / Clinique</option>
            <option value="Temporary Venue">Temporary Venue</option>
          </select>
          <button className='btn mb-1'>
            Add
          </button>
        </div>
      </fieldset>
    </form >
  );
};

export default VaccinationSitesForm;
