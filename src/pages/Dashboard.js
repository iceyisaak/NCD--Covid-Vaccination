import React from 'react';
import { Link } from "react-router-dom";

const Dashboard = (props) => {

  const { logout, vaccines, setVaccines, vaccineList, showNotification, Notification, setShowNotification } = props;

  return (
    <>
      <main>
        <h1>
          Dashboard
        </h1>
        <Link to='/vaccines'>
          <button className='btn mb-1'>
            Vaccines
          </button>
        </Link>
        <button className='btn mb-1'>
          Patients
        </button>
        <button className='btn mb-1'>
          Certificates
        </button>
        <button className='btn mb-1'>
          Infection Report
        </button>
      </main>
      {/* <main>
        <Form
          vaccines={vaccines}
          setVaccines={setVaccines}
          setShowNotification={setShowNotification}
        />
      </main>
      {vaccineList ? <VaccineList vaccineList={vaccineList} /> : 'List is Empty'}
      {showNotification && <Notification />} */}
    </>
  );
};

export default Dashboard;
