const axios = require("axios");
const inquirer = require("inquirer");
const fs = require('fs');
const chalk = require('chalk');
var figlet = require('figlet');

const inqQuestion = require("./InqOut");

 


function clearScreen() {
    console.clear();

    figlet('  Password Generator!!', function(err, data) {
        if (err) {
            console.log('Something went wrong...');
            console.dir(err);
            return;
        }
        console.log(data)
        console.log(chalk.bold.yellow("         Welcome to the CLI Password Generator!"));
        console.log(chalk.bold.yellow(""));
        console.log(chalk.bold.yellow("         I will ask you a series of questions to generate a random password."));
        console.log(chalk.bold.yellow(""));
        console.log(chalk.bold.yellow("         Please tell us your name:"));
    });
}
// inqQuestion(`browneyes`, `confirm`, `Are your eyes brown?`)
// inqQuestion(`country`, `input`, `What is your favorite country?`)

async function runIndex() {

    await clearScreen();

    await inqQuestion(`name`, `input`, `*`);

    console.log(chalk.bold.yellow(""));
    await inqQuestion(`blueeyes`, `confirm`, `Are your eyes blue?`);

    console.log(chalk.bold.yellow(""));
    console.log(chalk.bold.red(`         Thank you for your eye color!`));
    console.log(chalk.bold.yellow(""));

    await inqQuestion("state", "input", "What State were you born in?");

    console.log(chalk.bold.yellow(""));
    console.log(chalk.bold.red(`         Cool state to come from!`));
    console.log(chalk.bold.yellow(""));
    
    await inqQuestion(`country`, `input`, `What is your favorite country to visit?`);

    console.log(chalk.bold.yellow(""));
    console.log(chalk.bold.red(`         I like that one, too...`));
    console.log(chalk.bold.yellow(""));
    
    await inqQuestion(`arrested`, `confirm`, `Have you ever been arrested?`) 

    console.log(chalk.bold.yellow(""));
    console.log(chalk.bold.red(`         Thanks for the info!`));
    console.log(chalk.bold.yellow(""));
    
}

// async function runFunc2() {
//     await inqQuestion(`country`, `input`, `What is your favorite country?`)
//     await inqQuestion(`arrested`, `confirm`, `Have you ever been arrested?`) 
// }

runIndex();
// runFunc2();

