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
        setPersonDetail(person[0]);

        for (let i = 0; i < res.length; i++) {

          let vaccine = await contract.getVaccineByID({ id: res[i].vaccine_id });
          console.log('vaccine: ', vaccine);
          res[i].vaccine_name = vaccine[0].name;

          let vaccination_site = await contract.getVaccinationSiteByID({ id: res[i].vaccination_site_id });
          console.log('vaccination_site: ', vaccination_site);
          res[i].vaccination_site_name = vaccination_site[0].name;

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
                        {personDetail.name}
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
        <div className='qr-code'>
          <QRCode value={personDetail.id} size={200} />
        </div>
        {console.log('personDetail-ui: ', personDetail)}
        <div className='certificate-info'>
          <ul className='person-info'>
            <li><span className='font-bold'>Name:</span> {personDetail.name} </li>
            <li><span className='font-bold'>Nationality:</span> {personDetail.nationality} </li>
          </ul>
          <ul className='person-info'>
            <li><span className='font-bold'>Birthdate:</span> {personDetail.birthdate} </li>
            <li><span className='font-bold'>Email:</span> {personDetail.email} </li>
          </ul>
        </div>
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
