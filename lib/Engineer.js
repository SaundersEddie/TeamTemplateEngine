// TODO: Write code to define and export the Engineer class.  HINT: This class should inherit from Employee.


// Engineer Class
// Eddie Saunders saunders.eddie@outlook.com 24th April 2020


class Engineer {
    constructor (_name, _id,_email, _gitHubUser) {
        this.name = _name;
        this.id = _id;
        this.email = _email;
        this.github = _gitHubUser;
        //this.gitHubUser = _gitHubUser;
    }

    getGithub () {
        return (this.github);
    }
    getRole() {
        return ('Engineer');
    }
}

module.exports = Engineer;