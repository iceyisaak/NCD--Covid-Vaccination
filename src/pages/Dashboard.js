import React from 'react';
import Navbar from '../components/Navbar';
import Form from '../components/Form';
import VaccineList from '../components/VaccineList';

const Dashboard = (props) => {

  const { logout, vaccines, setVaccines, vaccineList, showNotification, Notification, setShowNotification } = props;

  return (
    <>
      <Navbar logout={logout} />
      <main>
        <Form
          vaccines={vaccines}
          setVaccines={setVaccines}
          setShowNotification={setShowNotification}
        />
      </main>
      {vaccineList ? <VaccineList vaccineList={vaccineList} /> : 'List is Empty'}
      {showNotification && <Notification />}
    </>
  );
};

export default Dashboard;
