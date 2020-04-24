// TODO: Write code to define and export the Employee class

// Employee Code and constructor
// Eddie Saunders saunders.eddie@outlook.com 24th April 2020
//


class Employee {
    constructor (_name, _id, _email) {
        this.name = _name;
        this.id = _id;
        this.email = _email;
    }

    getName() {
        return (this.name);

    }

    getId() {
        return (this.id);

    }

    getEmail() {
        return (this.email);
    }

    getRole() {
        return ('Employee');
    }

}


module.exports = Employee;