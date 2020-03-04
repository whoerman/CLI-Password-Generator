const axios = require("axios");
const inquirer = require("inquirer");
const fs = require('fs');
const chalk = require('chalk');
const figlet = require('figlet');

const Questions = require("./inqQuestions");
const Password = require("./passwordGenerator");


let password2 = new Password(32, true, true, true, true, "")

password2.generatePassword();


