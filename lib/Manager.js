// TODO: Write code to define and export the Manager class. HINT: This class should inherit from Employee.
// Manager Class
// Eddie Saunders saunders.eddie@outlook.com 24th April 2020
const Employee = require("../lib/Employee.js");
const inquirer = require("inquirer");

class Manager extends Employee {
    constructor(_name, _id, _email, _office) {
        super (_name, _id, _email);
        this.officeNumber = _office;
        this.role = "Manager";
    }

    getOfficeNumber () {
        return (this.officeNumber);
    }

    getRole() {
        return (this.role);
    }


}


module.exports = Manager;