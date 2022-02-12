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
    const { vaccine_id } = e.target.elements;
    setSearchTerm(vaccine_id.value);
    setShowResult(true);
  };


  const fetchCertificateByVaccineID = async (searchTerm) => {
    if (searchTerm !== '') {
      const res = await contract.getCertificateByVaccineID({ id: searchTerm });
      res ? setSearchResult(res) : setSearchResult(null);
    }
  };

  useEffect(() => {
    fetchCertificateByVaccineID(searchTerm);
  }, [searchTerm]);


  return (
    <>
      <h1>Search Certificate by Vaccine</h1>
      <form onSubmit={onSubmit} className='searchBox'>
        <label htmlFor="vaccine_id">Search Certicate by Vaccine</label>
        <select name="vaccine_id" id="person_id">
          {vaccineList.map((v, i) => <option value={v.id} key={i}>{v.name}</option>)}
        </select>
        <button>Submit</button>
        <button onClick={() => navigate('/certificates')}>Back</button>
      </form>

      {showResult ?
        searchResult.length === 0 ?
          <p>Not Distributed</p>
          :
          <table className='table'>
            <tbody>

              {searchResult.map((sR, i) =>
                <tr key={i}>
                  <td>
                    <span htmlFor={`${i}`}>{sR.id}</span>
                  </td>
                  <td>
                    <span htmlFor={`${i}`}>{sR.person_id}</span>
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

export default SearchCertificateByPerson;
