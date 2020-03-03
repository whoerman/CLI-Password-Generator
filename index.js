const axios = require("axios");
const inquirer = require("inquirer");
const fs = require('fs');
const chalk = require('chalk');
const figlet = require('figlet');


console.clear();

async function runProgram() {
    await header();
    await questions();
}


function header() {

return figlet('  Password Generator!!', function(err, data) {
    if (err) {
        console.log('Something went wrong...');
        console.dir(err);
        return;
    }
    console.log(data)
    console.log(chalk.bold.yellow("         Welcome to the CLI Password Generator!"));
    console.log(chalk.bold.yellow(""));
    console.log(chalk.bold.yellow("         Based on your choice of length and caracters, I will generate a random password."));
    console.log("");
});
};

function questions() {
   return inquirer.prompt([
      {
        type: "number",
        message: "How long would you like your password to be (8 to 128 characters)?",
        name: "length",
        default: "8"
      },
      {
        type: "confirm",
        message: "Would you like Upper Case letters",
        name: "uppercase"
      },
      {
          type: "confirm",
          message: "Would you like lower Case letters",
          name: "lowercase"
        },
        {
          type: "confirm",
          message: "Would you like numbers",
          name: "numbers"
        },
        {
          type: "confirm",
          message: "Would you like Special Characters ($%%#)?",
          name: "special"
        },
    ])
    .then(function(response) {
  
      if (response.confirm === response.password) {
        console.log(response);
      }
      else {
        console.log("You forgot your password already?!");
      }
    });
}

runProgram();
