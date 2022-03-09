import 'regenerator-runtime/runtime';
import { login, logout } from './utils';
import React, { useState, useEffect } from 'react';
import getConfig from './config';
import { Routes, Route } from "react-router-dom";

import Home from './pages/Home';
import Dashboard from './pages/Dashboard';
import Navbar from './components/Navbar';

import Vaccines from './pages/Vaccines/Vaccines';
import VaccineAdd from './pages/Vaccines/VaccineAdd';
import VaccineDetails from './pages/Vaccines/VaccineDetails';

import VaccinationSites from './pages/VaccinationSites/VaccinationSites';
import VaccinationSitesAdd from './pages/VaccinationSites/VaccinationSitesAdd';
import VaccinationSitesDetails from './pages/VaccinationSites/VaccinationSitesDetails';

import Persons from './pages/Persons/Persons';
import PersonsAdd from './pages/Persons/PersonsAdd';
import PersonsDetails from './pages/Persons/PersonsDetails';

import Transactions from './pages/Transactions/Transactions';
import TransactionDetails from './pages/Transactions/TransactionDetails';
import TransactionAdd from './pages/Transactions/TransactionAdd';

import TransactionSearchByPerson from './pages/Transactions/TransactionSearchByPerson';
import TransactionSearchByVaccine from './pages/Transactions/TransactionSearchByVaccine';
import TransactionSearchByVaccinationSite from './pages/Transactions/TransactionSearchByVaccinationSite';

import CertificateSearchByPerson from './pages/Certificates/CertificateSearchByPerson';

import './styles/global.scss';

const { networkId } = getConfig(process.env.NODE_ENV || 'development');

export default function App() {
  // use React Hooks to store greeting in component state
  const [isModalOpen, setIsModalOpen] = useState(false);
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

        <Route path='/vaccines/' element={<Vaccines vaccineList={vaccineList} vaccines={vaccines} />} />
        <Route path='/vaccines/:vaccineId' element={<VaccineDetails transactionList={transactionList} personList={personList} />} />
        <Route path='/addVaccine' element={<VaccineAdd setVacceines={setVaccines} vaccines={vaccines} />} />

        <Route path='/vaccinationSites/' element={<VaccinationSites vaccineList={vaccineList} vaccines={vaccines} />} />
        <Route path='/vaccinationSites/:vaccinationSiteId' element={<VaccinationSitesDetails transactionList={transactionList} personList={personList} />} />
        <Route path='/addVaccinationSite' element={<VaccinationSitesAdd setVacceines={setVaccines} vaccines={vaccines} />} />

        <Route path='/persons/' element={<Persons personList={personList} persons={persons} />} />
        <Route path='/persons/:personId' element={<PersonsDetails transactionList={transactionList} vaccineList={vaccineList} />} />
        <Route path='/addPerson' element={<PersonsAdd setPersons={setPersons} persons={persons} />} />

        <Route path='/transactions/' element={<Transactions transactionList={transactionList} transactions={transactions} />} />
        <Route path='/transactions/:transactionId' element={<TransactionDetails />} />
        <Route path='/addTransaction' element={
          <TransactionAdd setTransactions={setTransactions} transactions={transactions} vaccineList={vaccineList} vaccinationSiteList={vaccinationSiteList} personList={personList} />
        } />
        <Route path='/searchTransactionByPerson' element={
          <TransactionSearchByPerson transactions={transactions} transactionList={transactionList} vaccineList={vaccineList} personList={personList} />
        } />
        <Route path='/searchTransactionByVaccine' element={
          <TransactionSearchByVaccine transactions={transactions} transactionList={transactionList} vaccineList={vaccineList} personList={personList} />
        } />
        <Route path='/searchTransactionByVaccinationSite' element={
          <TransactionSearchByVaccinationSite transactions={transactions} transactionList={transactionList} vaccineList={vaccineList} vaccinationSiteList={vaccinationSiteList} personList={personList} />
        } />

        <Route path='/searchCertificateByPerson' element={
          <CertificateSearchByPerson transactions={transactions} transactionList={transactionList} vaccineList={vaccineList} vaccinationSiteList={vaccinationSiteList} personList={personList} />
        } />

      </Routes>


    </>
  );
}
