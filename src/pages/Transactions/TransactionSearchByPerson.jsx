import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Modal from '../../components/modal/Modal';

const TransactionSearchByPerson = () => {

  const [searchResult, setSearchResult] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [showResult, setShowResult] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [personList, setPersonList] = useState([]);

  const navigate = useNavigate();

  const onSubmit = async (e) => {
    e.preventDefault();
    const { person_id } = e.target.elements;
    setSearchTerm(person_id.value);
    setShowResult(true);
  };

  useEffect(() => {
    window.contract.getPersons().then(setPersonList);
  }, []);


  const fetchTransactionsByPersonID = async () => {
    if (searchTerm !== '') {
      const res = await contract.getTransactionsByPersonID({ id: searchTerm });
      if (res) {

        for (let i = 0; i < res.length; i++) {

          let vaccine = await contract.getVaccineByID({ id: res[i].vaccine_id });
          res[i].vaccine_name = vaccine[0].name;

          let vaccination_site = await contract.getVaccinationSiteByID({ id: res[i].vaccination_site_id });
          res[i].vaccination_site_name = vaccination_site[0].name;

          let person = await contract.getPersonByID({ id: res[i].person_id });
          res[i].person_name = person[0].name;

        }
        setSearchResult(res);
      } else {
        setSearchResult(null);
      }
    }
  };

  useEffect(() => {
    fetchTransactionsByPersonID();
  }, [searchTerm]);


  const handleModalOpen = () => {
    isModalOpen ? setIsModalOpen(false) : setIsModalOpen(true);
  };


  return (
    <>
      <h1>Search Transaction by Person</h1>
      < >
        <div className='margin-center mb-1'>
          <form onSubmit={onSubmit} className='form'>

            <label htmlFor="person_id" className='mb-1'>
              Search Transaction by Person
            </label>
            <select name="person_id" id="person_id" className='form-input mb-1'>
              {personList.map((p, i) => <option value={p.id} key={i}>{p.name}</option>)}
            </select>
            <button className='btn'>Submit</button>
          </form>
        </div>

      </>

      <div className='list'>
        {showResult ?
          searchResult.length === 0 ?
            <p>No Vaccine Transaction</p> :
            <>
              <table className='table'>
                <thead className='table-head'>
                  <tr>
                    <td className='px-1'>Name</td>
                    <td className='px-1'>Vaccine</td>
                    <td className='px-1'>Date</td>
                    <td className='px-1'>Vaccination Site</td>
                  </tr>
                </thead>
                <tbody>
                  {searchResult.map((sR, i) =>
                    <tr key={i}>
                      <td className='px-1'>
                        {sR.person_name}
                      </td>
                      <td className='px-1'>
                        {sR.vaccine_name}
                      </td>
                      <td className='px-1'>
                        {sR.application_date}
                      </td>
                      <td className='px-1'>
                        {sR.vaccination_site_name}
                      </td>
                    </tr>
                  )}
                </tbody >
              </table >
              <button className="mt-1" onClick={handleModalOpen}>
                Get Transaction
              </button>
            </>
          : null
        }
      </div>
      <button onClick={() => navigate('/transactions')}>Back</button>

      <Modal isModalOpen={isModalOpen} handleModalOpen={handleModalOpen}>
        <h1 className='certificate-header'>Vaccine Transaction</h1>
        <div className="list">
          <table className=''>
            <thead className='table-head'>
              <tr>
                <td className='px-1'>Name</td>
                <td className='px-1'>Vaccine</td>
                <td className='px-1'>Date</td>
                <td className='px-1'>Vaccination Site</td>
              </tr>
            </thead>
            <tbody>
              {searchResult.map((sR, i) =>
                <tr key={i}>
                  <td className='px-1'>
                    {sR.person_name}
                  </td>
                  <td className='px-1'>
                    {sR.vaccine_name}
                  </td>
                  <td className='px-1'>
                    {sR.application_date}
                  </td>
                  <td className='px-1'>
                    {sR.vaccination_site_name}
                  </td>
                </tr>
              )}
            </tbody >
          </table >
        </div>
      </Modal>
    </>
  );
};

export default TransactionSearchByPerson;
