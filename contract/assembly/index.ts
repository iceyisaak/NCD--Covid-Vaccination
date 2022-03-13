import { logging } from "near-sdk-as";
import { vaccines, Vaccine, vaccination_sites, VaccinationSite, persons, Person, transactions, Transaction } from "./models";


// ------------------------- Vaccines smart contract methods ----------------- -------- //

// Method to register a new Vaccine
export function addVaccine(id: string, name: string, manufacturer: string, type: string): void {
  assert(id.length > 0, "Vaccine ID is required");
  assert(name.length > 0, "Vaccine name is required");
  assert(manufacturer.length > 0, "Manufacturer is required");
  assert(type.length > 0, "Vaccine type is required");
  let vaccine = new Vaccine(id, name, manufacturer, type);
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

// ------------------------- Vaccination Sites smart contract methods ----------------- -------- //

// Method to register a new Vaccination Site
export function addVaccinationSite(id: string, name: string, address: string, type: string): void {
  assert(id.length > 0, "Vaccine ID is required");
  assert(name.length > 0, "Vaccine name is required");
  assert(address.length > 0, "Addresss is required");
  assert(type.length > 0, "Vaccination Site type is required");
  let vaccination_site = new VaccinationSite(id, name, address, type);
  vaccination_sites.push(vaccination_site);
}

// Method to consult all types of Vaccination Sites
export function getVaccinationSites(): Array<VaccinationSite> {
  let result = new Array<VaccinationSite>(vaccination_sites.length);
  for (let i = 0; i < vaccination_sites.length; i++) {
    let vaccination_site = vaccination_sites[i];
    result[i] = vaccination_site;
  }
  return result;
}

// Method to query a vaccine by vaccine id
export function getVaccinationSiteByID(id: string): Array<VaccinationSite> | null {
  assert(id.length > 0, "ID is required");
  let result = new Array<VaccinationSite>();
  for (let i = 0; i < vaccination_sites.length; i++) {
    const list = vaccination_sites[i];
    if (list.id == id) {
      result.push(list);
    }
  }
  return result;
}




// ------------------------- People smart contract methods ----------------- -------- //

// Method to register a new Vaccine
export function addPerson(id: string, nationality: string, name: string, email: string, phone: string, address: string, birthdate: string, citizen_id: string): void {
  assert(id.length > 0, "ID is required");
  assert(nationality.length > 0, "Nationality is required");
  assert(name.length > 0, "The name is required");
  assert(email.length > 0, "Email is required");
  assert(phone.length > 0, "Phone is required");
  assert(address.length > 0, "Address is required");
  assert(birthdate.length > 0, "Birthdate is required");
  assert(citizen_id.length > 0, "Citizen ID is required");
  let person = new Person(id, nationality, name, email, phone, address, birthdate, citizen_id);
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
export function addTransaction(id: string, vaccine_id: string, person_id: string, vaccination_site_id: string, application_date: string, vaccine_lot: string, digital_stamp: string): void {
  assert(id.length > 0, "Certificate ID is required");
  assert(vaccine_id.length > 0, "Vaccine ID is required");
  assert(person_id.length > 0, "Manufacturer is required");
  assert(vaccination_site_id.length > 0, "Vaccination Site is required");
  assert(application_date.length > 0, "Application Date is required");
  assert(vaccine_lot.length > 0, "Vaccine Lot is required");
  assert(digital_stamp.length > 0, "The stamp is required");
  let transaction = new Transaction(id, vaccine_id, person_id, vaccination_site_id, application_date, vaccine_lot, digital_stamp);
  transactions.push(transaction);
}


// Method to list all certificates
export function getTransactions(): Array<Transaction> | null {
  let result = new Array<Transaction>();
  for (let i = 0; i < transactions.length; i++) {
    let list = transactions[i];
    result.push(list);
  }
  return result;
}


// Method to query certificate by id
export function getTransactionByID(id: string): Array<Transaction> | null {
  assert(id.length > 0, "ID is required");
  let result = new Array<Transaction>();
  for (let i = 0; i < transactions.length; i++) {
    const list = transactions[i];
    if (list.id == id) {
      result.push(list);
    }
  }
  return result;
}

// Method to query certificate by person id
export function getTransactionsByPersonID(id: string): Array<Transaction> | null {
  assert(id.length > 0, "ID is required");
  let result = new Array<Transaction>();
  for (let i = 0; i < transactions.length; i++) {
    let list = transactions[i];
    if (list.person_id == id) {
      result.push(list);
    }
  }
  return result;
}



// Method to query certificate by vaccine id
export function getTransactionsByVaccineID(id: string): Array<Transaction> | null {
  assert(id.length > 0, "ID is required");
  let result = new Array<Transaction>();
  for (let i = 0; i < transactions.length; i++) {
    const list = transactions[i];
    if (list.vaccine_id == id) {
      result.push(list);
    }
  }
  return result;
}


// Method to consult certificate by Country
export function getTransactionsByVaccinationSiteID(id: string): Array<Transaction> | null {
  assert(id.length > 0, "Vaccination Site is required");
  let result = new Array<Transaction>()
  for (let i = 0; i < transactions.length; i++) {
    const list = transactions[i];
    if (list.vaccination_site_id == id) {
      result.push(list);
    }
  }
  return result;
}
