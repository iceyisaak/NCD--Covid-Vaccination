import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const SearchCertificateByCountry = (props) => {

  // const { certificateList, personList, vaccineList } = props;
  const [certificateList, setCertificateList] = useState([]);
  const [searchResult, setSearchResult] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [showResult, setShowResult] = useState(false);
  const [country, setCountry] = useState([]);

  const navigate = useNavigate();

  const onSubmit = async (e) => {
    e.preventDefault();
    const { country } = e.target.elements;
    console.log('country.value: ', country.value);
    setSearchTerm(country.value);
    setShowResult(true);
  };


  const fetchCertificateByCountry = async (searchTerm) => {
    if (searchTerm !== '') {
      const res = await contract.getCertificateByCountry({ country: searchTerm });
      res ? setSearchResult(res) : setSearchResult(null);
      console.log('res: ', res);
    }
  };



  const getUnique = (arr, index) => {

    const unique = arr
      .map(e => e[index])

      // store the keys of the unique objects
      .map((e, i, final) => final.indexOf(e) === i && i)

      // eliminate the dead keys & store unique objects
      .filter(e => arr[e]).map(e => arr[e]);

    return unique;
  };

  useEffect(() => {
    contract.getCertificates().then(setCertificateList);
    // const uniqueSet = new Set(ce);
    console.log('certificateList: ', certificateList);
  }, []);


  useEffect(() => {
    fetchCertificateByCountry(searchTerm);
  }, [searchTerm]);

  // const countries = certificateList.map((c) => c.country);
  // const uniqueCountry = getUnique(countries, certificateList.id);
  // console.log('uniqueSet: ', uniqueSet);
  // setCountry(uniqueSet);
  // console.log('country: ', country);
  // console.log('certificateList: ', certificateList);
  // console.log('uniqueCountry: ', uniqueCountry);

  return (
    <>

      <h1>Search Certificate by Country</h1>
      <form onSubmit={onSubmit} className='searchBox'>
        <label htmlFor="country">Search Country</label>
        <select name="country" id="country">
          {/* {uniqueSet.map((c, i) => <option value={c.country} key={i}>{c.country}</option>)} */}
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
