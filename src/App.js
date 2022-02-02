import 'regenerator-runtime/runtime';
import React, { useState, useEffect } from 'react';
import { login, logout } from './utils';
import { Routes, Route, Link, Outlet } from "react-router-dom";
import Home from './pages/Home';
import Dashboard from './pages/Dashboard';
import VaccinePage from './pages/Vaccines/VaccinePage';
import AddVaccine from './pages/Vaccines/AddVaccine';
import Form from './components/Form';
import Navbar from './components/Navbar';
import Layout from './Layout';

import './styles/global.scss';

import getConfig from './config';
import ViewVaccine from './pages/Vaccines/ViewVaccine';
import VaccineList from './components/VaccineList';
const { networkId } = getConfig(process.env.NODE_ENV || 'development');

export default function App() {
  // use React Hooks to store greeting in component state
  const [vaccines, setVaccines] = useState();
  const [vaccineList, setVaccineList] = useState([]);

  // when the user has not yet interacted with the form, disable the button
  const [buttonDisabled, setButtonDisabled] = useState(true);

  // after submitting the form, we want to show Notification
  const [showNotification, setShowNotification] = useState(false);

  window.walletConnection.isSignedIn() && useEffect(() => { window.contract.getVaccines().then(setVaccineList); }, []);

  return (
    <>
      {window.walletConnection.isSignedIn() && <Navbar logout={logout} />}
      <Routes>

        <Route
          path='/'
          element={
            window.walletConnection.isSignedIn() ?
              <Dashboard logout={logout}
                setVaccines={setVaccines}
                vaccines={vaccines}
                vaccineList={vaccineList}
                buttonDisabled={buttonDisabled}
                showNotification={showNotification}
                setButtonDisabled={setButtonDisabled}
                setShowNotification={setShowNotification}
                Notification={Notification}
              /> :
              <Home login={login} />
          }
        />

        <Route path='/vaccines/' element={<VaccinePage vaccineList={vaccineList} vaccines={vaccines} />} />
        <Route path='/vaccines/:id' element={<ViewVaccine vaccineList={vaccineList} />} />
        <Route path='/addVaccine' element={<AddVaccine setVacceines={setVaccines} vaccines={vaccines} showNotification={showNotification} />} />

      </Routes>
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
      {' '}
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
