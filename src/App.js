import 'regenerator-runtime/runtime';
import React, { useState, useEffect } from 'react';
import { login, logout } from './utils';
import Home from './pages/Home';
import Dashboard from './pages/Dashboard';

import './global.css';

import getConfig from './config';
const { networkId } = getConfig(process.env.NODE_ENV || 'development');

export default function App() {
  // use React Hooks to store greeting in component state
  const [vaccines, setVaccines] = useState();
  const [vaccineList, setVaccineList] = useState([]);

  // when the user has not yet interacted with the form, disable the button
  const [buttonDisabled, setButtonDisabled] = useState(true);

  // after submitting the form, we want to show Notification
  const [showNotification, setShowNotification] = useState(false);

  useEffect(
    () => {
      if (window.walletConnection.isSignedIn()) {
        window.contract.getVaccines().then(setVaccineList);
      }
    },
    []
  );

  // if not signed in, return early with sign-in prompt
  if (!window.walletConnection.isSignedIn()) {
    return (
      <Home login={login} />
    );
  }



  return (
    <>
      <Dashboard
        logout={logout}
        setVaccines={setVaccines}
        vaccines={vaccines}
        vaccineList={vaccineList}
        buttonDisabled={buttonDisabled}
        showNotification={showNotification}
        setButtonDisabled={setButtonDisabled}
        setShowNotification={setShowNotification}
        Notification={Notification}
      // done={done}
      />
    </>
  );
}

// this component gets rendered by App after the form is submitted
function Notification() {
  const urlPrefix = `https://explorer.${networkId}.near.org/accounts`;
  return (
    <aside>
      <a target="_blank" rel="noreferrer" href={`${urlPrefix}/${window.accountId}`}>
        {window.accountId}
      </a>
      {' '/* React trims whitespace around tags; insert literal space character when needed */}
      called method: 'setGreeting' in contract:
      {' '}
      <a target="_blank" rel="noreferrer" href={`${urlPrefix}/${window.contract.contractId}`}>
        {window.contract.contractId}
      </a>
      <footer>
        <div>✔ Succeeded</div>
        <div>Just now</div>
      </footer>
    </aside>
  );
}
