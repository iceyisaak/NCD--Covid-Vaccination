import React from 'react';

const Home = ({ login }) => {
  return (
    <main>
      <h1>NEAR Covid Vaccination Dapp</h1>
      <p>
        This is a very simple Todo dapp created with create-near-app ReactJS template on the NEAR blockchain. The smart contract is written in AssembleyScript. It allows users to:
      </p>
      <ol>
        <li>See Entered Tasks</li>
        <li>Add a Task</li>
        <li>Mark a Task as Done/Undone</li>
      </ol>
      <p>
        Go ahead and click the button below to try it out:
      </p>
      <p style={{ textAlign: 'center', marginTop: '2.5em' }}>
        <button onClick={login}>Sign in</button>
      </p>
    </main>
  );
};

export default Home;
