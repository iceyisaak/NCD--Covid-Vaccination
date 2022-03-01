import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const TransactionSearchByVaccine = (props) => {

  const { vaccineList } = props;
  const [searchResult, setSearchResult] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [showResult, setShowResult] = useState(false);

  const navigate = useNavigate();

  const onSubmit = async (e) => {
    e.preventDefault();
    const { vaccine_id } = e.target.elements;
    setSearchTerm(vaccine_id.value);
    setShowResult(true);
  };

  const fetchTransactionsByVaccineID = async () => {
    if (searchTerm !== '') {
      const res = await contract.getTransactionsByVaccineID({ id: searchTerm });
      if (res) {
        for (let i = 0; i < res.length; i++) {

          let vaccine = await contract.getVaccineByID({ id: res[i].vaccine_id });
          console.log('vaccine: ', vaccine);
          res[i].vaccine_name = vaccine[0].name;

          let vaccination_site = await contract.getVaccinationSiteByID({ id: res[i].vaccination_site_id });
          console.log('vaccination_site: ', vaccination_site);
          res[i].vaccination_site_name = vaccination_site[0].name;

          let person = await contract.getPersonByID({ id: res[i].person_id });
          console.log('person: ', person);
          res[i].person_name = person[0].name;
        }
        setSearchResult(res);
      } else {
        setSearchResult(null);
      }
    }
  };

  useEffect(() => {
    fetchTransactionsByVaccineID();
  }, [searchTerm]);



  return (
    <>
      <h1>Search Certificate by Vaccine</h1>
      <>
        <div className='margin-center mb-1'>
          <form onSubmit={onSubmit} className='searchBox'>
            <label htmlFor="vaccine_id">Search Certicate by Vaccine</label>
            <select name="vaccine_id" id="person_id" className='form-input mb-1'>
              {vaccineList.map((v, i) => <option value={v.id} key={i}>{v.name}</option>)}
            </select>
            <button>Submit</button>
          </form>
        </div>
      </>
      <div className="list">

        {showResult ?
          searchResult.length === 0 ?
            <p>No Data</p> :
            <table className='table'>
              <tbody>
                {searchResult.map((sR, i) =>
                  <tr key={i}>
                    <td className='px-1'>
                      {sR.person_name}
                    </td >
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
          : null
        }
      </div>
      <button onClick={() => navigate('/transactions')}>Back</button>
    </>
  );
};

export default TransactionSearchByVaccine;
