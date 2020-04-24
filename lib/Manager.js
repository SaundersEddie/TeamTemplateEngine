// TODO: Write code to define and export the Manager class. HINT: This class should inherit from Employee.
// Manager Class
// Eddie Saunders saunders.eddie@outlook.com 24th April 2020


class Manager {
    constructor(_name, _id, _email, _office) {
        this.name = _name;
        this.id = _id;
        this.email = _email;
        this.officeNumber = _office;
    }

    getRole() {
        return ('Manager');
    }

    getOfficeNumber () {
        return (this.officeNumber);
    }

}


module.exports = Manager;