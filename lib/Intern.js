// TODO: Write code to define and export the Intern class.  HINT: This class should inherit from Employee.
// Intern Class
// Eddie Saunders saunders.eddie@outlook.com 24th April 2020


class Intern {
    constructor (_name, _id, _school, _testValue) {
        this.school = _testValue;
    }

    getSchool () {
        return (this.school);

    }

    getRole () {
        return ('Intern');
    }
}

module.exports = Intern;