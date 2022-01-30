import { PersistentVector } from "near-sdk-as";

// Exporting the Vaccine class
@nearBindgen
export class Vaccine {
    id: string; //pfzier
    name: string; //Pfzer
    manufacturer: string; //BioNTech, Fosun Pharma, Pfizer
    type: string; //RNA
    administration: string; //Intramuscular injection
    dose: string;
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
    digital_stamp: u64;
    constructor(id: string, vaccine_id: string, person_id: string, country: string, application_date: string, vaccine_lot: string, digital_stamp: u64) {
        this.id = id;
        this.vaccine_id = vaccine_id;
        this.person_id = person_id;
        this.country = country;
        this.application_date = application_date;
        this.vaccine_lot = vaccine_lot;
        this.digital_stamp = digital_stamp;
    }
}

// Exporting the covid infection class
@nearBindgen
export class Infection {
    id: string;
    person_id: string;
    certificate_id: string;
    infection_date: string;
    recovery_date: string;
    infection_level: string;
    constructor(id: string, person_id: string, certificate_id: string, infection_date: string, recovery_date: string, infection_level: string) {
        this.id = id;
        this.person_id = person_id;
        this.certificate_id = certificate_id;
        this.infection_date = infection_date;
        this.recovery_date = recovery_date;
        this.infection_level = infection_level;
    }
}

export const vaccines = new PersistentVector<Vaccine>("v");
export const persons = new PersistentVector<Person>("p");
export const certificates = new PersistentVector<Certificate>("c");
export const infections = new PersistentVector<Infection>("i");