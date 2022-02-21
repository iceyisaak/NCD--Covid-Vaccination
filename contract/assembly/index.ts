import { logging } from "near-sdk-as";
import { vaccines, Vaccine, persons, Person, certificates, Certificate } from "./models";


// ------------------------- Vaccines smart contract methods ----------------- -------- //

// Method to register a new Vaccine
export function addVaccine(id: string, name: string, manufacturer: string, type: string, administration: string, dose: string): void {
  assert(id.length > 0, "Vaccine ID is required");
  assert(name.length > 0, "Vaccine name is required");
  assert(manufacturer.length > 0, "Manufacturer is required");
  assert(type.length > 0, "Vaccine type is required");
  assert(administration.length > 0, "Vaccine administration type is required");
  assert(dose.length > 0, "The number of doses is required");
  let vaccine = new Vaccine(id, name, manufacturer, type, administration, dose);
  vaccines.push(vaccine);
}

// Method to consult all types of Vaccine
export function getVaccines(): Array<Vaccine> {
  let result = new Array<Vaccine>(vaccines.length);
  for (let i = 0; i < vaccines.length; i++) {
    let vaccine = vaccines[i];
    result[i] = vaccine;
  }
  return result;
}

// Method to query a vaccine by vaccine id
export function getVaccineByID(id: string): Array<Vaccine> | null {
  assert(id.length > 0, "ID is required");
  let result = new Array<Vaccine>();
  for (let i = 0; i < vaccines.length; i++) {
    const list = vaccines[i];
    if (list.id == id) {
      result.push(list);
    }
  }
  return result;
}

// ------------------------- People smart contract methods ----------------- -------- //

// Method to register a new Vaccine
export function addPerson(id: string, nationality: string, name: string, photo: string, birthdate: string): void {
  assert(id.length > 0, "ID is required");
  assert(nationality.length > 0, "Nationality is required");
  assert(name.length > 0, "The name is required");
  assert(photo.length > 0, "Photo URL is required");
  assert(birthdate.length > 0, "Birthdate is required");
  let person = new Person(id, nationality, name, photo, birthdate);
  persons.push(person);
}


// Method to query all people
export function getPersons(): Array<Person> | null {
  let result = new Array<Person>();
  for (let i = 0; i < persons.length; i++) {
    let list = persons[i];
    result.push(list);
  }
  return result;
}

// Method to query a Person by id
export function getPersonByID(id: string): Array<Person> | null {
  assert(id.length > 0, "ID is required");
  let result = new Array<Person>();
  for (let i = 0; i < persons.length; i++) {
    const list = persons[i];
    if (list.id == id) {
      result.push(list);
    }
  }
  return result;
}


// ------------------------- Methods of the smart contract of Vaccination Certificates --------------- ---------- //

// Method to register a certificate
export function addCertificate(id: string, vaccine_id: string, person_id: string, country: string, application_date: string, vaccine_lot: string, digital_stamp: string): void {
  assert(id.length > 0, "Vaccine ID is required");
  assert(vaccine_id.length > 0, "Vaccine name is required");
  assert(person_id.length > 0, "Manufacturer is required");
  assert(country.length > 0, "Vaccine type is required");
  assert(application_date.length > 0, "The type of administration of the Vaccine is required");
  assert(vaccine_lot.length > 0, "The number of doses is required");
  assert(digital_stamp.length > 0, "The stamp is required");
  let certificate = new Certificate(id, vaccine_id, person_id, country, application_date, vaccine_lot, digital_stamp);
  certificates.push(certificate);
}


// Method to list all certificates
export function getCertificates(): Array<Certificate> | null {
  let result = new Array<Certificate>();
  for (let i = 0; i < certificates.length; i++) {
    let list = certificates[i];
    result.push(list);
  }
  return result;
}


// Method to query certificate by id
export function getCertificateByID(id: string): Array<Certificate> | null {
  assert(id.length > 0, "ID is required");
  let result = new Array<Certificate>();
  for (let i = 0; i < certificates.length; i++) {
    const list = certificates[i];
    if (list.id == id) {
      result.push(list);
    }
  }
  return result;
}

// Method to query certificate by person id
export function getCertificateByPersonID(id: string): Array<Certificate> | null {
  assert(id.length > 0, "ID is required");
  let result = new Array<Certificate>();
  for (let i = 0; i < certificates.length; i++) {
    let list = certificates[i];
    if (list.person_id == id) {
      result.push(list);
    }
  }
  return result;
}


// Method to query certificate by vaccine id
export function getCertificateByVaccineID(id: string): Array<Certificate> | null {
  assert(id.length > 0, "ID is required");
  let result = new Array<Certificate>();
  for (let i = 0; i < certificates.length; i++) {
    const list = certificates[i];
    if (list.vaccine_id == id) {
      result.push(list);
    }
  }
  return result;
}

// Method to consult certificate by Country
export function getCertificateByCountry(country: string): Array<Certificate> | null {
  assert(country.length > 0, "Country is required");
  let result = new Array<Certificate>()
  for (let i = 0; i < certificates.length; i++) {
    const list = certificates[i];
    if (list.country == country) {
      result.push(list);
    }
  }
  return result;
}
