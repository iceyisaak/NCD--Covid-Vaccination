import React from 'react';

const Navbar = (props) => {

  const { logout } = props;

  return (
    <nav className='nav'>
      <h3 className='text-gray-100 cursor-pointer text-lg font-bold'>
        Near Covid Vaccination Dapp
      </h3>
      <div>
        <span>
          {window.accountId}
        </span>
        <button className="link" onClick={logout}>
          Sign out
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
