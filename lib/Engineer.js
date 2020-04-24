// TODO: Write code to define and export the Engineer class.  HINT: This class should inherit from Employee.


// Engineer Class
// Eddie Saunders saunders.eddie@outlook.com 24th April 2020
const Employee = require("../lib/Employee.js");

class Engineer extends Employee {
    constructor (_name, _id, _email, _gitHubUser) {
        super (_name, _id, _email);
        this.github = _gitHubUser;
        //this.gitHubUser = _gitHubUser;
    }

    getGithub () {
        return (this.github);
    }
    getRole() {
        //super.getRole();
        return ("Engineer");
    }
}

module.exports = Engineer;