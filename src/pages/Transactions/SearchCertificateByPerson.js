import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const SearchCertificateByPerson = (props) => {

  const { certificateList, personList, vaccineList } = props;
  const [searchResult, setSearchResult] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [showResult, setShowResult] = useState(false);

  const navigate = useNavigate();

  const onSubmit = async (e) => {
    e.preventDefault();
    const { person_id } = e.target.elements;
    setSearchTerm(person_id.value);
    setShowResult(true);
  };


  const fetchTransactionByPersonID = async () => {
    console.log('searchTerm: ', searchTerm);
    if (searchTerm !== '') {
      const res = await contract.getTransactionByPersonID({ id: searchTerm });
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

  console.log('searchResult: ', searchResult);

  useEffect(() => {
    fetchTransactionByPersonID();
  }, [searchTerm]);


  return (
    <>
      <h1>Search Certificate by Person</h1>
      < >
        <div className='margin-center'>
          <form onSubmit={onSubmit} className='form'>
            <div
              style={{ display: 'flex', flexFlow: 'row wrap' }}
              className='mb-1 fieldset'>
              <label htmlFor="person_id" className='mb-1'>
                Search Certicate by Person
              </label>
              <select name="person_id" id="person_id" className='form-input mb-1'>
                {personList.map((p, i) => <option value={p.id} key={i}>{p.name}</option>)}
              </select>
              <button className='btn'>Submit</button>
            </div>
          </form>
        </div>
        <button onClick={() => navigate('/transactions')}>Back</button>
      </>

      {showResult ?
        searchResult.length === 0 ?
          <p>No Vaccine Certificate</p> :
          <table className='table'>
            <tbody>

              {
                console.log('searchResult: ', searchResult),
                searchResult.map((sR, i) =>
                  <tr key={i}>
                    <td>
                      <span htmlFor={`${i}`}>{sR.person_name}</span>
                    </td>
                    <td>
                      <span htmlFor={`${i}`}>{sR.vaccine_name}</span>
                    </td>
                    <td>
                      <span htmlFor={`${i}`}>{sR.application_date}</span>
                    </td>
                    <td>
                      <span htmlFor={`${i}`}>{sR.vaccination_site_name}</span>
                    </td>
                  </tr>
                )}
            </tbody >
          </table >
        : null
      }
    </>
  );
};

export default SearchCertificateByPerson;
