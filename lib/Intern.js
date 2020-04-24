// TODO: Write code to define and export the Intern class.  HINT: This class should inherit from Employee.
// Intern Class
// Eddie Saunders saunders.eddie@outlook.com 24th April 2020
const Employee = require("../lib/Employee.js");

class Intern extends Employee {
    constructor (_name, _id, _email, _school) {
        super (_name, _id, _email);
        this.school = _school;
        this.role = "Intern";
    }

    getSchool () {
        return (this.school);

    }

    getRole () {
        return (this.role);
    }
}

module.exports = Intern;