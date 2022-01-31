import React from 'react';

const Form = (props) => {

  const { buttonDisabled, setButtonDisabled, vaccines, setVaccines, setShowNotification } = props;

  const onSubmit = async (e) => {
    e.preventDefault();

    const { id, name, manufacturer, type, administration, dose } = e.target.elements;

    // alert(vaccine);

    try {

      fieldset.disable = true;
      // make an update call to the smart contract
      await window.contract.addVaccine({
        // pass the value that the user entered in the greeting field
        id: id.value,
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

    // update local `greeting` variable to match persisted value
    setVaccines(vaccines);

    // show Notification
    setShowNotification(true);

    // remove Notification again after css animation completes
    // this allows it to be shown again next time the form is submitted
    setTimeout(() => {
      setShowNotification(false);
    }, 11000);

    window.location.reload();

  };

  return (
    <form onSubmit={onSubmit}>
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
            id="id"
            style={{ flex: 1, marginBottom: '5px' }}
            placeholder='e.g. #001'
          />
          <input
            autoComplete="off"
            id="name"
            style={{ flex: 1, marginBottom: '5px' }}
            placeholder='e.g. Comirnaty'
          />
          <input
            autoComplete="off"
            id="manufacturer"
            style={{ flex: 1, marginBottom: '5px' }}
            placeholder='e.g. Pfizer-BionTech'
          />
          <input
            autoComplete="off"
            id="type"
            style={{ flex: 1, marginBottom: '5px' }}
            placeholder='e.g. RNA'
          />
          <input
            autoComplete="off"
            id="administration"
            style={{ flex: 1, marginBottom: '5px' }}
            placeholder='e.g. Intramuscular injection'
          />
          <input
            autoComplete="off"
            id="dose"
            style={{ flex: 1, marginBottom: '5px' }}
            placeholder='Dose'
          />

        </div>
        <button
          style={{ width: '100%' }}
        >
          Add
        </button>
      </fieldset>
    </form>
  );
};

export default Form;
