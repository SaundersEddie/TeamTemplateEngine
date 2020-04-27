const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./lib/htmlRenderer");

let dataEntry = true;
// Here we create an additon array to store our team info
const teamMembers = [];

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
            choices: ["Intern", "Engineer", "Manager", "Done"]
        }
    ])
}

const createTeam = () => {
    console.log ("CreatingTeam");
}

const createManager = () => {
    console.log("Creating our Manager");
    return inquirer.prompt([{
        type: "input",
        name: "name",
        message: "What is your name?",
    },
    {
        type: "input",
        name: "id",
        message: "What is your employee id?",
    },
    {
        type: "input",
        name: "email",
        message: "What is your email?",
    },
    {
        type: "input",
        name: "officeNumber",
        message: "What is your direct office number?",
    },
    ]).then((userInput) => {
        const manager = new Manager(userInput.name, userInput.id, userInput.email, userInput.officeNumber)
        teamMembers.push(manager)
        //createTeam();
        //console.log(teamMembers)
        //console.log(manager);
    })
};

async function createIntern() {
    console.log("Creating an intern");
    return inquirer.prompt([{
        type: "input",
        name: "name",
        message: "What is your name?",
    },
    {
        type: "input",
        name: "id",
        message: "What is your employee id?"
    },
    {
        type: "input",
        name: "email",
        message: "What is your email?"
    },
    {
        type: "input",
        name: "school",
        message: "What school are you attending?"
    }]).then((userInput) => {
        const intern = new Intern(userInput.name, userInput.id, userInput.email, userInput.school)
        teamMembers.push(intern)
        //createTeam();
        //console.log(teamMembers)
    });
}

async function createEngineer() {
    console.log("Create an Engineer");
    return inquirer.prompt([{
        type: "input",
        name: "name",
        message: "What is your name?",
    },
    {
        type: "input",
        name: "id",
        message: "What is your employee id?"
    },
    {
        type: "input",
        name: "email",
        message: "What is your email?"
    },
    {
        type: "input",
        name: "gitHub",
        message: "What is your GitHub UserName?"
    }]).then((userInput) => {
        const engineer = new Engineer(userInput.name, userInput.id, userInput.email, userInput.gitHub)
        teamMembers.push(engineer)
        //createTeam();
        //console.log(teamMembers)
    })
}

const writeFile = () => {
    console.log ("Writing File");
    console.log (OUTPUT_DIR);
    console.log (outputPath);
    if (!fs.existsSync(OUTPUT_DIR)) {
        fs.mkdirSync(OUTPUT_DIR)
    }
    fs.writeFileSync(outputPath, render(teamMembers), "utf-8");
}



async function selectUserType(data) {
    switch (data.EmployeeType) {
        case ("Intern"):
            console.log("Intern Selected");
            await createIntern();
            break;
        case ("Engineer"):
            console.log("Engineer Selected");
            await createEngineer();
            break;
        case ("Manager"):
            console.log("Manager Selected");
            await createManager();
            break;
        case ("Done"):
            console.log("Done creating users, building page");
            dataEntry = false;
            writeFile();
            break;
        default:
            console.log("You get an F");
            dataEntry = false;
    }
}

async function init() {
    // We're going to loop this until the user selects done or an error occurs
    while (dataEntry) {
        console.log (dataEntry);
        const employeeType = await getEmployeeType();
        await selectUserType(employeeType);
    }
}

init();