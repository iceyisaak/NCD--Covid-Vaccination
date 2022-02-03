import React from 'react';
import { useNavigate } from "react-router-dom";

const Dashboard = () => {

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
      </main>
    </>
  );
};

export default Dashboard;
