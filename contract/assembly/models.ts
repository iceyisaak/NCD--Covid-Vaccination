import { PersistentVector } from "near-sdk-as";

// Exporting the Vaccine class
@nearBindgen
export class Vaccine {
  id: string; //pfzier
  name: string; //Pfzer
  manufacturer: string; //BioNTech, Fosun Pharma, Pfizer
  type: string; //mRNA
  constructor(id: string, name: string, manufacturer: string, type: string) {
    this.id = id;
    this.name = name;
    this.manufacturer = manufacturer;
    this.type = type;
  }
}

// Exporting the VaccinationSite class
@nearBindgen
export class VaccinationSite {
  id: string;
  name: string;
  address: string;
  type: string;
  constructor(id: string, name: string, address: string, type: string) {
    this.id = id;
    this.name = name;
    this.address = address;
    this.type = type;
  }
}

// Exporting the Person class
@nearBindgen
export class Person {
  id: string;
  nationality: string;
  name: string;
  email: string;
  phone: string;
  address: string;
  birthdate: string;
  citizen_id: string; // Passport ID / Citizen ID / etc.  
  constructor(id: string, nationality: string, name: string, email: string, phone: string, address: string, birthdate: string, citizen_id: string) {
    this.id = id;
    this.nationality = nationality;
    this.name = name;
    this.email = email;
    this.phone = phone;
    this.address = address;
    this.birthdate = birthdate;
    this.citizen_id = citizen_id;
  }
}

// Exporting the Certificate class
@nearBindgen
export class Transaction {
  id: string;
  vaccine_id: string;
  person_id: string;
  vaccination_site_id: string
  application_date: string;
  vaccine_lot: string;
  digital_stamp: string;
  constructor(id: string, vaccine_id: string, person_id: string, vaccination_site_id: string, application_date: string, vaccine_lot: string, digital_stamp: string) {
    this.id = id;
    this.vaccine_id = vaccine_id;
    this.person_id = person_id;
    this.vaccination_site_id = vaccination_site_id;
    this.application_date = application_date;
    this.vaccine_lot = vaccine_lot;
    this.digital_stamp = digital_stamp;
  }
}

export const vaccines = new PersistentVector<Vaccine>("v");
export const vaccination_sites = new PersistentVector<VaccinationSite>("vs");
export const persons = new PersistentVector<Person>("p");
export const transactions = new PersistentVector<Transaction>("t");