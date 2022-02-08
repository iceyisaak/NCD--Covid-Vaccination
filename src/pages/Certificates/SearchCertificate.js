import React, { useEffect, useState } from 'react';

const SearchCertificate = (props) => {

  const { certificateList, personList, vaccineList } = props;
  const [searchResult, setSearchResult] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [showResult, setShowResult] = useState(false);

  const onSubmit = async (e) => {
    e.preventDefault();
    // try {
    //   await window.contract.getCertificateByPersonID({
    //     id: id.value,
    //   });
    //   // HOW TO RETRIEVE RESULT FROM FUNCTION?
    //   setSearchResult(personCertificate);
    // } catch (e) {
    //   alert(
    //     'Something went wrong! ' +
    //     'Maybe you need to sign out and back in? ' +
    //     'Check your browser console for more info.'
    //   );
    //   throw e;
    // } finally {
    //   // fieldset.disabled = false;
    // }
    // alert('New Certificate Added');
    // location.assign('/certificates');

    const { person_id } = e.target.elements;
    setSearchTerm(person_id.value);
    console.log('person_id:', person_id);
    console.log('person_id.value:', person_id.value);
    setShowResult(true);
    // console.log('e.target.elements:', e.target.elements);
    // console.log('e.target.value:', e.target.value);
    // console.log('personList', personList);
    // console.log('person_id', { person_id });


    // setSearchTerm(e.target.value);

    // console.log(searchTerm);
    // console.log(searchResult);

    // console.log(person_id);
  };

  console.log('searchTerm:', searchTerm);



  const fetchCertificateByPersonID = async (searchTerm) => {
    if (searchTerm !== '') {
      const res = await contract.getCertificateByPersonID({ id: searchTerm });
      console.log('res: ', res);
      setSearchResult(res);
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
      </form>

      {showResult ?
        searchResult === null ?
          <p>No Vaccine Certificate</p> :

          <>
            <div>
              Vaccine: {vaccineList.map((v, i) => <span key={i}>{v.name}</span>)}
            </div>
            <div>
              Date Issued: {searchResult.application_date}
            </div>
          </>

        : null
      }

    </>


  );
};

export default SearchCertificate;
