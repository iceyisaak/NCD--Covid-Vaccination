import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const TransactionSearchByVaccinationSite = () => {

  const [searchResult, setSearchResult] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [showResult, setShowResult] = useState(false);
  const [vaccinationSiteList, setVaccinationSiteList] = useState([]);

  const navigate = useNavigate();

  const onSubmit = async (e) => {
    e.preventDefault();
    const { vaccination_site_id } = e.target.elements;
    setSearchTerm(vaccination_site_id.value);
    setShowResult(true);
  };

  useEffect(() => {
    window.contract.getVaccinationSites().then(setVaccinationSiteList);
  }, []);


  const fetchTransactionsByVaccinationSite = async () => {
    if (searchTerm !== '') {
      const res = await contract.getTransactionsByVaccinationSiteID({ id: searchTerm });
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
    fetchTransactionsByVaccinationSite();
  }, [searchTerm]);

  return (
    <>
      <h1>Search Certificate by Vaccination Site</h1>
      <>
        <div className="margin-center mb-1">
          <form onSubmit={onSubmit} className='form'>
            <fieldset id='fieldset'>
              <div style={{ display: 'flex', flexFlow: 'row wrap' }}>
                <label htmlFor="country" className='mb-1 form-input'>
                  Search Vaccination Site
                </label>
                <select name="vaccination-site_id" id="vaccination_site_id" className='form-input mb-1'>
                  {vaccinationSiteList.map((vS, i) => <option value={vS.id} key={i}>{vS.name}</option>)}
                </select>
                <button className='btn mb-1'>Search</button>
              </div>
            </fieldset>
          </form>
        </div>
      </>
      <div className="list">

        {showResult ?
          searchResult.length === 0 ?
            <p>No Vaccine Certificate</p> :
            <table className='table'>
              <thead className='table-head'>
                <tr>
                  <td className='px-1'>Vaccination Site</td>
                  <td className='px-1'>Person Name</td>
                  <td className='px-1'>Vaccine</td>
                  <td className='px-1'>Date</td>
                </tr>
              </thead>
              <tbody>
                {searchResult.map((sR, i) =>
                  <tr key={i}>
                    <td className='px-1'>
                      {sR.vaccination_site_name}
                    </td>
                    <td className='px-1'>
                      {sR.person_name}
                    </td>
                    <td className='px-1'>
                      {sR.vaccine_name}
                    </td>
                    <td className='px-1'>
                      {sR.application_date}
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

export default TransactionSearchByVaccinationSite;
