import { logging } from 'near-sdk-as'
import { vaccines, Vaccine, persons, Person, certificates, Certificate, infections, Infection } from "./models";

// Método de Vacunate
export function vaccinate(): string {
  return 'Get Vaccinated!';
}

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
export function getVaccineByID(id: string): Vaccine | null {
  assert(id.length > 0, "Vaccine ID is required");
  for (let i = 0; i < vaccines.length; i++) {
    if (vaccines[i].id == id) {
      let find = vaccines[i];
      return find;
    }
    // const find = vaccines.find((id: string) => id === id)
    // return find;
  }
  return null;
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
export function getPersons(): Array<Person> {
  let result = new Array<Person>(persons.length);
  for (let i = 0; i < persons.length; i++) {
    let person = persons[i];
    result[i] = person;
  }
  return result;
}

// Method to query a Person by id
export function getPersonByID(id: string): Person | null {
  assert(id.length > 0, "ID is required");
  for (let i = 0; i < persons.length; i++) {
    if (persons[i].id == id) {
      let find = persons[i];
      return find;
    }
  }
  return null;
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
export function getCertificates(): Array<Certificate> {
  let result = new Array<Certificate>(certificates.length);
  for (let i = 0; i < certificates.length; i++) {
    let list = certificates[i];
    result[i] = list;
  }
  return result;
}

// Method to query certificate by id
export function getCertificateByID(id: string): Certificate | null {
  assert(id.length > 0, "ID is required");
  for (let i = 0; i < certificates.length; i++) {
    if (certificates[i].id == id) {
      let find = certificates[i];
      return find;
    }
  }
  return null;
}

// Method to query certificate by person id
// export function getCertificateByPersonID(id: string): Certificate | null {
//   logging.log('AS-1')
//   assert(id.length > 0, "ID is required");
//   for (let i = 0; i < certificates.length; i++) {
//     logging.log('AS-2')
//     if (certificates[i].person_id == id) {
//       let find = certificates[i];
//       return find;
//     }
//     logging.log('AS-3')
//   }
//   return null;
// }

// export function getCertificateByPersonID(id: string): Array<Certificate> | null {
//   logging.log('AS-1')
//   assert(id.length > 0, "ID is required");
//   let result = new Array<Certificate>(certificates.length);
//   logging.log('AS-2')
//   // for (let i = 0; i < certificates.length; i++) {
//   //   if (certificates[i].person_id == id) {
//   //     let find = certificates[i];
//   //     result[i] = find;
//   //   }
//   // }
//   for (let i = 0; i < certificates.length; i++) {
//     logging.log('AS-3 ' + certificates[i].person_id)
//     // if (certificates[i].person_id == id) {
//     logging.log('AS-4')
//     let list = certificates[i];
//     logging.log(list)
//     // result[i] = list;
//     if (list !== null) {
//       result.push(list)
//     }
//     // }
//   }
//   return result;
// }

export function getCertificateByPersonID(id: string): Array<Certificate> | null {
  assert(id.length > 0, "ID is required");
  let result = new Array<Certificate>();
  for (let i = 0; i < certificates.length; i++) {
    const list = certificates[i];
    if (list.person_id == id) {
      result.push(list);
    }
  }
  return result;
}


// Method to query certificate by vaccine id
export function getCertificateByVaccineID(id: string): Certificate | null {
  assert(id.length > 0, "ID is required");
  for (let i = 0; i < certificates.length; i++) {
    if (certificates[i].vaccine_id == id) {
      let find = certificates[i];
      return find;
    }
  }
  return null;
}

// Method to consult certificate by Country
export function getCertificateByCountry(country: string): Certificate | null {
  assert(country.length > 0, "Country is required");
  for (let i = 0; i < certificates.length; i++) {
    if (certificates[i].country == country) {
      let find = certificates[i];
      return find;
    }
  }
  return null;
}


// ------------------------- Methods of the smart contract for Contagious Certificates --------------- ---------- //
// Method to register a certificate
export function addInfection(id: string, person_id: string, certificate_id: string, infection_date: string, recovery_date: string, infection_level: string): void {
  assert(id.length > 0, "Vaccine ID is required");
  assert(person_id.length > 0, "persona_id is required");
  assert(certificate_id.length > 0, "certificado_id is required");
  assert(infection_date.length > 0, "Closing contagion is required");
  assert(recovery_date.length > 0, "Closing recovery is required");
  assert(infection_level.length > 0, "Level of infection is required");
  let infection = new Infection(id, person_id, certificate_id, infection_date, recovery_date, infection_level);
  infections.push(infection);
}

// Method to list all contagions
export function getInfections(): Array<Infection> {
  let result = new Array<Infection>(infections.length);
  for (let i = 0; i < infections.length; i++) {
    let list = infections[i];
    result[i] = list;
  }
  return result;
}

// Method to query contagion by id
export function getInfectionByID(id: string): Infection | null {
  assert(id.length > 0, "ID is required");
  for (let i = 0; i < infections.length; i++) {
    if (infections[i].id == id) {
      let find = infections[i];
      return find;
    }
  }
  return null;
}

// Method to consult contagion by person_id
export function getInfectionByPersonID(id: string): Infection | null {
  assert(id.length > 0, "ID is required");
  for (let i = 0; i < infections.length; i++) {
    if (infections[i].person_id == id) {
      let find = infections[i];
      return find;
    }
  }
  return null;
}

// Method to query contagion by infection_level
export function getInfectionByLevel(infection_level: string): Infection | null {
  assert(infection_level.length > 0, "infection_level is required");
  for (let i = 0; i < infections.length; i++) {
    if (infections[i].infection_level == infection_level) {
      let find = infections[i];
      return find;
    }
  }
  return null;
}