const inquirer = require("inquirer");


//format the inquirer
function inqQuestion(nameInput, typeInput, messageInput) {
    return inquirer.prompt([{
        type: typeInput,
        message: messageInput,
        name: nameInput
    }]).then(function (currentAnswer) {
        console.log(currentAnswer);         // need to return this out
    }).catch(error => {
        if (error.isTTyError) {
            console.log("unable to process");
        } else {
            console.log("unable to process");
        }
    });
}


inqQuestion(`country`, `input`, `What is your favorite country?`);

// inqQuestion(`blueeyes`, `confirm`, `Are your eyes blue?`);

// inqQuestion("state", "input", "What State were you born in?");

// module.exports = questionInput;