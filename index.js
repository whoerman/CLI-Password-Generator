const axios = require("axios");
const inquirer = require("inquirer");
const fs = require('fs');
const chalk = require('chalk');
const figlet = require('figlet');

const questions = require("./inquirerQuestions");

let passwordString = ""

console.clear();

async function runProgram() {
    await questions().then(function (response) {
        let length = response.length;
        let uppercase = response.uppercase;
        let lowercase = response.lowercase;
        let numbers = response.numbers;
        let special = response.special;
        let choiceArray = [uppercase, lowercase, numbers, special];
        generatePassword(length, uppercase, lowercase, numbers, special)
        
        function generatePassword() {
            let mathArray = [
                String.fromCharCode(Math.floor(Math.random() * (90 - 65 + 1)) + 65),
                String.fromCharCode(Math.floor(Math.random() * (122 - 97 + 1)) + 97),
                String.fromCharCode(Math.floor(Math.random() * (57 - 48 + 1)) + 48),
                String.fromCharCode(Math.floor(Math.random() * (47 - 38 + 1)) + 38)
            ];
            let type = (Math.floor(Math.random() * 4) + 0);
            if (choiceArray[type]) {
                passwordString = passwordString + mathArray[type]
            }
            if (passwordString.length < length) {
                generatePassword();
            } else {
                console.log(chalk.bold.yellow(""));
                console.log(chalk.bold.yellow(`               Here is your password:`));
                console.log(chalk.bold.yellow(""));
                console.log(chalk.bold.red(`            ${passwordString}`));
            }

        }
        });
}

runProgram()