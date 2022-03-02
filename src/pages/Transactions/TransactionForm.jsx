import React from 'react';
import { useNavigate } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';

const TransactionForm = (props) => {

  const { vaccineList, vaccinationSiteList, personList } = props;
  const navigate = useNavigate();

  const onSubmit = async (e) => {
    e.preventDefault();

    const { vaccine_id, person_id, vaccination_site_id, application_date, vaccine_lot } = e.target.elements;

    try {

      fieldset.disable = true;
      // make an update call to the smart contract
      await contract.addTransaction({
        // pass the value that the user entered in the greeting field
        id: uuidv4(),
        vaccine_id: vaccine_id.value,
        person_id: person_id.value,
        vaccination_site_id: vaccination_site_id.value,
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
    navigate('/transactions');
  };

  return (
    <form onSubmit={onSubmit} className='form'>
      <fieldset id="fieldset">
        <div style={{ display: 'flex', flexFlow: 'row wrap' }}>
          <label htmlFor="person_id" className='mb-1'>
            Person ID
          </label>
          <select name="person_id" id="person_id" className='form-input mb-1'>
            {personList.map((p, i) => <option value={p.id} key={i}>{p.name}</option>)}
          </select>
          <label htmlFor="vaccine_id" className='mb-1'>
            Vaccine ID
          </label>
          <select name="vaccine_id" id="vaccine_id" className='form-input mb-1'>
            {vaccineList.map((v, i) => <option value={v.id} key={i}>{v.name}</option>)}
          </select>
          <label htmlFor="country" className='mb-1'>
            Vaccination Site
          </label>
          <select name="vaccination_site_id" id="vaccination_site_id" className='form-input mb-1'>
            {vaccinationSiteList.map((vS, i) => <option value={vS.id} key={i}>{vS.name}</option>)}
          </select>
          <label htmlFor="application_date" className='mb-1'>
            Application Date
          </label>
          <input id="application_date" className='form-input mb-1' placeholder='e.g. Germany' type='date' />
          <label htmlFor="vaccine_lot" className='mb-1'>
            Vaccine Lot
          </label>
          <input
            autoComplete="off"
            id="vaccine_lot"
            className='form-input mb-1'
            placeholder='e.g. 123-ABC'
            type='text'
          />
          <button className='btn mb-1'>
            Add
          </button>
        </div>
      </fieldset>
    </form >
  );
};

export default TransactionForm;
