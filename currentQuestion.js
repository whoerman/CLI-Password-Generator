const axios = require("axios");
const inquirer = require("inquirer");
const fs = require('fs');
const chalk = require('chalk');


// format for the question array to link to inquirer
// helpful to put it in backtics/template literal
// [`name', `type`, `message`, `default`, `choices`]
let questionsArray = [
    [`position`, `input`, `What is your position on this project? (developer, coder, etc)`],
    [`grandmother`, `confirm`, `Are you a grandmother?`],
]

function questionInput(nameInput) {
    questionsArray.forEach(function (item) {
        if (nameInput == item[0]) {
            console.log(item);
            let nameIn = nameInput;
            let messageIn = item[2];
            let typeIn = item[1];
            currentQuestion(nameIn, messageIn, typeIn);
        };
    })
};

function currentQuestion(nameIn, messageIn, typeIn) {
    let typeX = typeIn;
    let messageX = messageIn;
    let nameX = nameIn;
    console.log(nameIn + typeIn + messageIn);
    return inquirer.prompt([{
        type: typeX,
        message: messageX,
        name: nameX
    }]).then(function (currentAnswer) {
        console.log(currentAnswer);
    }).catch(error => {
        if (error.isTTyErro) {
            console.log("unable to process");
        } else {
            console.log("unable to process");
        }
    });
}
questionInput("grandmother");