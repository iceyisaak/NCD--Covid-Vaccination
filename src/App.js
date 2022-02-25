import 'regenerator-runtime/runtime';
import { login, logout } from './utils';
import React, { useState, useEffect } from 'react';
import getConfig from './config';
import { Routes, Route } from "react-router-dom";
import Home from './pages/Home';
import Dashboard from './pages/Dashboard';
import VaccinePage from './pages/Vaccines/VaccinePage';
import AddVaccine from './pages/Vaccines/AddVaccine';
import VaccinationSites from './pages/VaccinationSites/VaccinationSites';
import VaccinationSitesAdd from './pages/VaccinationSites/VaccinationSitesAdd';
import VaccinationSitesDetails from './pages/VaccinationSites/VaccinationSitesDetails';
import Navbar from './components/Navbar';
import ViewVaccine from './pages/Vaccines/ViewVaccine';
import PersonPage from './pages/Persons/PersonPage';
import AddPerson from './pages/Persons/AddPerson';
import ViewPerson from './pages/Persons/ViewPerson';
import Transactions from './pages/Transactions/Transactions';
import TransactionDetails from './pages/Transactions/TransactionDetails';
import TransactionAdd from './pages/Transactions/TransactionAdd';
import SearchCertificateByPerson from './pages/Transactions/SearchCertificateByPerson';
import SearchCertificateByVaccine from './pages/Transactions/SearchCertificateByVaccine';
import SearchCertificateByCountry from './pages/Transactions/SearchCertificateByCountry';

import './styles/global.scss';

const { networkId } = getConfig(process.env.NODE_ENV || 'development');

export default function App() {
  // use React Hooks to store greeting in component state
  const [vaccines, setVaccines] = useState();
  const [vaccineList, setVaccineList] = useState([]);
  const [vaccinationSiteList, setVaccinationSiteList] = useState([]);
  const [persons, setPersons] = useState();
  const [personList, setPersonList] = useState([]);
  const [transactions, setTransactions] = useState();
  const [transactionList, setTransactionList] = useState([]);

  window.walletConnection.isSignedIn() &&
    useEffect(() => {
      window.contract.getVaccines().then(setVaccineList);
      window.contract.getVaccinationSites().then(setVaccinationSiteList);
      window.contract.getPersons().then(setPersonList);
      window.contract.getTransactions().then(setTransactionList);
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
        <Route path='/vaccines/:vaccineId' element={<ViewVaccine transactionList={transactionList} personList={personList} />} />
        <Route path='/addVaccine' element={<AddVaccine setVacceines={setVaccines} vaccines={vaccines} />} />

        <Route path='/vaccinationSites/' element={<VaccinationSites vaccineList={vaccineList} vaccines={vaccines} />} />
        <Route path='/vaccinationSites/:vaccinationSiteId' element={<VaccinationSitesDetails transactionList={transactionList} personList={personList} />} />
        <Route path='/addVaccinationSite' element={<VaccinationSitesAdd setVacceines={setVaccines} vaccines={vaccines} />} />

        <Route path='/persons/' element={<PersonPage personList={personList} persons={persons} />} />
        <Route path='/persons/:personId' element={<ViewPerson transactionList={transactionList} vaccineList={vaccineList} />} />
        <Route path='/addPerson' element={<AddPerson setPersons={setPersons} persons={persons} />} />

        <Route path='/transactions/' element={<Transactions transactionList={transactionList} transactions={transactions} />} />
        <Route path='/transactions/:transactionId' element={<TransactionDetails />} />
        <Route path='/addTransaction' element={
          <TransactionAdd setTransactions={setTransactions} transactions={transactions} vaccineList={vaccineList} vaccinationSiteList={vaccinationSiteList} personList={personList} />
        } />
        <Route path='/searchCertificateByPerson' element={
          <SearchCertificateByPerson transactions={transactions} transactionList={transactionList} vaccineList={vaccineList} personList={personList} />
        } />
        <Route path='/searchCertificateByVaccine' element={
          <SearchCertificateByVaccine transactions={transactions} transactionList={transactionList} vaccineList={vaccineList} personList={personList} />
        } />
        <Route path='/searchCertificateByCountry' element={
          <SearchCertificateByCountry transactions={transactions} transactionList={transactionList} vaccineList={vaccineList} personList={personList} />
        } />

      </Routes>
    </>
  );
}
