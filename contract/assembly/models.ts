import { PersistentVector } from "near-sdk-as";

// Exporting the Vaccine class
@nearBindgen
export class Vaccine {
  id: string; //pfzier
  name: string; //Pfzer
  manufacturer: string; //BioNTech, Fosun Pharma, Pfizer
  type: string; //mRNA
  constructor(id: string, name: string, manufacturer: string, type: string, administration: string, dose: string) {
    this.id = id;
    this.name = name;
    this.manufacturer = manufacturer;
    this.type = type;
    this.administration = administration;
    this.dose = dose;
  }
}

// Exporting the Person class
@nearBindgen
export class Person {
  id: string;
  nationality: string;
  name: string;
  photo: string;
  birthdate: string;
  constructor(id: string, nationality: string, name: string, photo: string, birthdate: string) {
    this.id = id;
    this.nationality = nationality;
    this.name = name;
    this.photo = photo;
    this.birthdate = birthdate;
  }
}

// Exporting the Certificate class
@nearBindgen
export class Certificate {
  id: string;
  vaccine_id: string;
  person_id: string;
  country: string;
  application_date: string;
  vaccine_lot: string;
  digital_stamp: string;
  constructor(id: string, vaccine_id: string, person_id: string, country: string, application_date: string, vaccine_lot: string, digital_stamp: string) {
    this.id = id;
    this.vaccine_id = vaccine_id;
    this.person_id = person_id;
    this.country = country;
    this.application_date = application_date;
    this.vaccine_lot = vaccine_lot;
    this.digital_stamp = digital_stamp;
  }
}

export const vaccines = new PersistentVector<Vaccine>("v");
export const persons = new PersistentVector<Person>("p");
export const certificates = new PersistentVector<Certificate>("c");