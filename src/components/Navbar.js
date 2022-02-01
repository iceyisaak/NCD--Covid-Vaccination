import React from 'react';
import { Link } from 'react-router-dom';

import '../styles/global.scss';

const Navbar = (props) => {

  const { logout, login } = props;

  return (
    <nav className='nav'>
      <Link to='/'>
        <h3 className='logo'>
          Near Covid Vaccination Dapp
        </h3>
      </Link>
      <div className='account-control'>
        <span>
          {window.accountId}
        </span>

        {window.walletConnection.isSignedIn() ?
          <button className="link" onClick={logout}>
            Sign out
          </button> :
          <button className="link" onClick={login}>
            Sign in
          </button>
        }
      </div>
    </nav>
  );
};

export default Navbar;
