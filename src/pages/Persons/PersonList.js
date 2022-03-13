import React from 'react';
import { Link } from 'react-router-dom';

const PersonList = (props) => {

  const { personList } = props;

  return (

    <div className='list'>
      <div className='header-box mb-4'>
        <h2 className='text-lg'>Person List</h2>
        <span className='text-sm entry'>Total: {personList.length} Entries</span>
      </div>
      {personList.length === 0 ?
        <p>List is Empty</p> :
        <table className='table'>
          <thead className='table-head'>
            <tr>
              <td className='px-1'>Person Name</td>
            </tr>
          </thead>
          <tbody >
            {personList.map((p, i) =>
              <tr key={i} >
                <td className='px-1'>
                  <Link to={`/persons/${p.id}`}>
                    {p.name}
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

export default PersonList;
