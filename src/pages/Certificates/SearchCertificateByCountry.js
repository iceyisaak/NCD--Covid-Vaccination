import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const SearchCertificateByCountry = (props) => {

  const { certificateList, personList, vaccineList } = props;
  const [searchResult, setSearchResult] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [showResult, setShowResult] = useState(false);

  const navigate = useNavigate();

  const onSubmit = async (e) => {
    e.preventDefault();
    const { country } = e.target.elements;
    setSearchTerm(country.value);
    setShowResult(true);
  };


  const fetchCertificateByCountry = async (searchTerm) => {
    if (searchTerm !== '') {
      const res = await contract.getCertificateByCountry({ country: searchTerm });
      res ? setSearchResult(res) : setSearchResult(null);
    }
    console.log('res: ', res);
  };


  useEffect(() => {
    fetchCertificateByCountry(searchTerm);
  }, [searchTerm]);

  console.log('searchResult: ', searchResult);

  return (
    <>
      <h1>Search Certificate by Country</h1>
      <form onSubmit={onSubmit} className='searchBox'>
        <label htmlFor="country">Search Country</label>
        <select name="country" id="country">
          {certificateList.map((c, i) => <option value={c.id} key={i}>{c.country}</option>)}
        </select>
        <button>Submit</button>
        <button onClick={() => navigate('/certificates')}>Back</button>
      </form>

      {showResult ?
        searchResult.length === 0 ?
          <p>No Vaccine Certificate</p> :
          <table className='table'>
            <tbody>

              {searchResult.map((sR, i) =>
                <tr key={i}>
                  <td>
                    <span htmlFor={`${i}`}>{sR.vaccine_id}</span>
                  </td>
                  <td>
                    <span htmlFor={`${i}`}>{sR.application_date}</span>
                  </td>
                  <td>
                    <span htmlFor={`${i}`}>{sR.country}</span>
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

export default SearchCertificateByCountry;
