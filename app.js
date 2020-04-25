const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./lib/htmlRenderer");


// Write code to use inquirer to gather information about the development team members,
// and to create objects for each team member (using the correct classes as blueprints!)

// After the user has input all employees desired, call the `render` function (required
// above) and pass in an array containing all employee objects; the `render` function will
// generate and return a block of HTML including templated divs for each employee!

// After you have your html, you're now ready to create an HTML file using the HTML
// returned from the `render` function. Now write it to a file named `team.html` in the
// `output` folder. You can use the variable `outputPath` above target this location.
// Hint: you may need to check if the `output` folder exists and create it if it
// does not.

// HINT: each employee type (manager, engineer, or intern) has slightly different
// information; write your code to ask different questions via inquirer depending on
// employee type.

// HINT: make sure to build out your classes first! Remember that your Manager, Engineer,
// and Intern classes should all extend from a class named Employee; see the directions
// for further information. Be sure to test out each class and verify it generates an
// object with the correct structure and methods. This structure will be crucial in order
// for the provided `render` function to work! ```

const getEmployeeType = () => {
    return inquirer.prompt([
        {
            type: "list",
            name: "EmployeeType",
            message: "Please select the employee Type",
            choices: ["Intern", "Engineer", "Manager"]
        }
    ])
}

async function createEmployee() {
    console.log("Getting Employee Data in createEmployee");
    const getEmployeeData = () => {
        return inquirer.prompt([
            {
                type: "input",
                name: "name",
                message: "Please enter the employee name: "
            },
            {
                name: "id",
                message: "Please enter the id number: "
            }
        ])
    }
}


const getManagerData = () => {
    console.log("Inside Create Manager Code!");
    return inquirer.prompt([
        {
            type: "input",
            name: "name",
            message: "Please enter the employee name: "
        },
        {
            type: "input",
            name: "id",
            message: "Please enter the id number: "
        }

    ])
}


async function init() {
    const employeeType = await getEmployeeType();
    selectUserType(employeeType);

}

async function selectUserType(data) {
    // console.log (data.EmployeeType);
    switch (data.EmployeeType) {
        case ("Intern"):
            console.log("Intern Selected");
            createIntern();
            // We would call a function here to get our Intern data
            break;
        case ("Engineer"):
            console.log("Engineer Selected");
            // We would call a function here to get our Engineer data
            break;
        case ("Manager"):
            console.log("Manager Selected");
            // createManager();
            newUserManager = new getManagerData();
            // We would call a function here to get our Manager data
            break;
        default:
            // If we get here something broke in our list
            console.log("You get an F");
            break;
    }
}

async function createIntern() {
    console.log("Creating an intern");
}

async function createEngineer() {
    console.log("Create an Engineer");
}





init();