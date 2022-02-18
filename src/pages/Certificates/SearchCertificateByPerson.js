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


  // const fetchCertificateByPersonID = async (searchTerm) => {
  //   if (searchTerm !== '') {
  //     const res = await contract.getCertificateByPersonID({ id: searchTerm });
  //     res ? setSearchResult(res) : setSearchResult(null);
  //   }
  // };

  const fetchCertificateByPersonID = async (searchTerm) => {
    if (searchTerm !== '') {
      const res = await contract.getCertificateByPersonID({ id: searchTerm });
      if (res) {
        const vaccine = await contract.getVaccineByID({ id: res[0].vaccane_id });
        res.vaccine_name = vaccine[0].name;
        setSearchResult(res);
      } else {
        setSearchResult(null);
      }
    }
  };

  console.log('searchResult: ', searchResult);

  useEffect(() => {
    fetchCertificateByPersonID(searchTerm);
  }, [searchTerm]);


  return (
    <>
      <h1>Search Certificate</h1>
      <form onSubmit={onSubmit} className='searchBox'>
        <label htmlFor="person_id">Search Certicate by Person</label>
        <select name="person_id" id="person_id">
          {personList.map((p, i) => <option value={p.id} key={i}>{p.name}</option>)}
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

export default SearchCertificateByPerson;
