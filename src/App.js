import 'regenerator-runtime/runtime';
import { login, logout } from './utils';
import React, { useState, useEffect } from 'react';
import getConfig from './config';
import { Routes, Route } from "react-router-dom";
import Home from './pages/Home';
import Dashboard from './pages/Dashboard';
import VaccinePage from './pages/Vaccines/VaccinePage';
import AddVaccine from './pages/Vaccines/AddVaccine';
import Navbar from './components/Navbar';
import ViewVaccine from './pages/Vaccines/ViewVaccine';
import PersonPage from './pages/Persons/PersonPage';
import AddPerson from './pages/Persons/AddPerson';
import ViewPerson from './pages/Persons/ViewPerson';
import CertificatePage from './pages/Certificates/CertificatePage';
import ViewCertificate from './pages/Certificates/ViewCertificate';
import AddCertificate from './pages/Certificates/AddCertificate';
import SearchCertificateByPerson from './pages/Certificates/SearchCertificateByPerson';

import './styles/global.scss';

const { networkId } = getConfig(process.env.NODE_ENV || 'development');

export default function App() {
  // use React Hooks to store greeting in component state
  const [vaccines, setVaccines] = useState();
  const [vaccineList, setVaccineList] = useState([]);
  const [persons, setPersons] = useState();
  const [personList, setPersonList] = useState([]);
  const [certificates, setCertificates] = useState();
  const [certificateList, setCertificateList] = useState([]);

  window.walletConnection.isSignedIn() &&
    useEffect(() => {
      window.contract.getVaccines().then(setVaccineList);
      window.contract.getPersons().then(setPersonList);
      window.contract.getCertificates().then(setCertificateList);
    }, []);

  return (
    <>
      {window.walletConnection.isSignedIn() && <Navbar logout={logout} />}
      <Routes>

        <Route
          path='/'
          element={
            window.walletConnection.isSignedIn() ?
              <Dashboard logout={logout} setVaccines={setVaccines} vaccines={vaccines} vaccineList={vaccineList} /> :
              <Home login={login} />
          }
        />

        <Route path='/vaccines/' element={<VaccinePage vaccineList={vaccineList} vaccines={vaccines} />} />
        <Route path='/vaccines/:vaccineId' element={<ViewVaccine certificateList={certificateList} personList={personList} />} />
        <Route path='/addVaccine' element={<AddVaccine setVacceines={setVaccines} vaccines={vaccines} />} />

        <Route path='/persons/' element={<PersonPage personList={personList} persons={persons} />} />
        <Route path='/persons/:personId' element={<ViewPerson certificateList={certificateList} vaccineList={vaccineList} />} />
        <Route path='/addPerson' element={<AddPerson setPersons={setPersons} persons={persons} />} />

        <Route path='/certificates/' element={<CertificatePage certificateList={certificateList} certificates={certificates} />} />
        <Route path='/certificates/:certificateId' element={<ViewCertificate />} />
        <Route path='/addCertificate' element={
          <AddCertificate setCertificates={setCertificates} certificates={certificates} vaccineList={vaccineList} personList={personList} />
        } />
        <Route path='/searchCertificateByPerson' element={
          <SearchCertificateByPerson certificates={certificates} certificateList={certificateList} vaccineList={vaccineList} personList={personList} />
        } />

      </Routes>
    </>
  );
}
