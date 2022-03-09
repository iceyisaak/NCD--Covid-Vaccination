import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import QRCode from "react-qr-code";
import Modal from '../../components/modal/Modal';
import './Certificates.scss';

const CertificateSearchByPerson = (props) => {

  const { personList } = props;
  const [searchResult, setSearchResult] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [showResult, setShowResult] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [personDetail, setPersonDetail] = useState([]);

  const navigate = useNavigate();

  const onSubmit = async (e) => {
    e.preventDefault();
    const { person_id } = e.target.elements;
    setSearchTerm(person_id.value);
    setShowResult(true);
  };


  const fetchTransactionsByPersonID = async () => {
    if (searchTerm !== '') {
      const res = await contract.getTransactionsByPersonID({ id: searchTerm });
      if (res) {

        let person = await contract.getPersonByID({ id: searchTerm });
        setPersonDetail(person);
        // console.log('person: ', person);
        // // res[i].person_name = person[0].name;
        // // res[i].person_nationality = person[0].nationality;
        // // res[i].person_email = person[0].email;
        // // res[i].person_birthdate = person[0].birthdate;

        for (let i = 0; i < res.length; i++) {

          let vaccine = await contract.getVaccineByID({ id: res[i].vaccine_id });
          console.log('vaccine: ', vaccine);
          res[i].vaccine_name = vaccine[0].name;

          let vaccination_site = await contract.getVaccinationSiteByID({ id: res[i].vaccination_site_id });
          console.log('vaccination_site: ', vaccination_site);
          res[i].vaccination_site_name = vaccination_site[0].name;

          // let person = await contract.getPersonByID({ id: res[i].person_id });
          // console.log('person: ', person);
          // // res[i].person_name = person[0].name;
          // // res[i].person_nationality = person[0].nationality;
          // // res[i].person_email = person[0].email;
          // // res[i].person_birthdate = person[0].birthdate;

        }
        setSearchResult(res);
      } else {
        setSearchResult(null);
      }
    }
  };

  console.log('personDetail: ', personDetail);

  useEffect(() => {
    fetchTransactionsByPersonID();
  }, [searchTerm]);


  const handleModalOpen = () => {
    isModalOpen ? setIsModalOpen(false) : setIsModalOpen(true);
  };


  return (
    <>
      <h1>Search Certificate </h1>
      < >
        <div className='margin-center mb-1'>
          <form onSubmit={onSubmit} className='form'>

            <label htmlFor="person_id" className='mb-1'>
              Search by Name
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
            <p>No Vaccine Certificate</p> :
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
                Get Certificate
              </button>
            </>
          : null
        }
      </div>
      <button onClick={() => navigate('/')}>Back</button>

      <Modal isModalOpen={isModalOpen} handleModalOpen={handleModalOpen}>

        <h2 className='modal-header'>Vaccine Certificate</h2>
        {/* <QRCode
          value={sR.person_id}
        /> */}
        {console.log('personDetail-ui: ', personDetail)}
        {/* {console.log('person-ui: ', person)} */}
        {/* {searchResult.map((sR, i) => */}
        <div className='certificate-info'>
          <ul className='person-info'>
            <li>Name: {personDetail.name} </li>
            <li>Nationality: {personDetail.nationality} </li>
          </ul>
          <ul className='person-info'>
            <li>Birthdate: {personDetail.birthdate} </li>
            <li>Email: {personDetail.email} </li>
          </ul>
        </div>
        {/* )} */}
        <div className="list">
          <table className=''>
            <thead className='table-head'>
              <tr>
                <td className='px-1'>Vaccine</td>
                <td className='px-1'>Date</td>
                <td className='px-1'>Vaccination Site</td>
              </tr>
            </thead>
            <tbody>
              {searchResult.map((sR, i) =>
                <tr key={i}>
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

export default CertificateSearchByPerson;
