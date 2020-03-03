const axios = require("axios");
const inquirer = require("inquirer");
const fs = require('fs');
const chalk = require('chalk');

const inqQuestion = require("./InqOut");

let answerObj = {};

inqQuestion(`browneyes`, `confirm`, `Are your eyes brown?`)
// inqQuestion(`country`, `input`, `What is your favorite country?`)

// async function runFunc() {
//     await inqQuestion(`blueeyes`, `confirm`, `Are your eyes blue?`)
//     await inqQuestion("state", "input", "What State were you born in?")
//     await inqQuestion(`country`, `input`, `What is your favorite country?`)
//     await inqQuestion(`arrested`, `confirm`, `Have you ever been arrested?`) 
// }

// async function runFunc2() {
//     await inqQuestion(`country`, `input`, `What is your favorite country?`)
//     await inqQuestion(`arrested`, `confirm`, `Have you ever been arrested?`) 
// }


// runFunc();
// runFunc2();

