import React from 'react';
import { Link } from 'react-router-dom';

const TransactionList = (props) => {

  const { transactionList } = props;

  return (
    <div className='list'>
      <div className='header-box mb-4'>
        <h2 className='text-lg'>Certificate List</h2>
        <span className='text-sm entry'>Total: {transactionList.length} Entries</span>
      </div>
      {transactionList.length === 0 ?
        <p>List is Empty</p> :
        <table className='table'>
          <tbody>
            <tr>
              <td>
                Person
              </td>
              <td>
                Vaccine
              </td>
              <td>
                Vaccination Site
              </td>
            </tr>
            {console.log('transactionList: ', transactionList),
              transactionList.map((t, i) =>
                <tr key={i}>
                  <td>
                    <Link to={`/transactions/${t.id}`}>
                      {t.person_id}
                    </Link>
                  </td>
                  <td>
                    <Link to={`/transactions/${t.id}`}>
                      {t.vaccine_id}
                    </Link>
                  </td>
                  <td>
                    <Link to={`/transactions/${t.id}`}>
                      {t.vaccination_site_id}
                    </Link>
                  </td>
                </tr>
              )}
          </tbody >
        </table >
      }
    </div>
  );
};

export default TransactionList;
