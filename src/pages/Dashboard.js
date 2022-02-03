import React from 'react';
import { useNavigate } from "react-router-dom";

const Dashboard = (props) => {

  const { logout, vaccines, setVaccines, vaccineList, showNotification, Notification, setShowNotification } = props;

  const navigate = useNavigate();

  return (
    <>
      <main>
        <h1>
          Dashboard
        </h1>
        <button onClick={() => navigate('/vaccines')} className='btn mb-1'>
          Vaccines
        </button>
        <button onClick={() => navigate('/persons')} className='btn mb-1'>
          Persons
        </button>
        <button onClick={() => navigate('/certificates')} className='btn mb-1'>
          Certificates
        </button>
        {/* <button className='btn mb-1'>
          Infection Report
        </button> */}
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
