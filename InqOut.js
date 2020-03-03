const inquirer = require("inquirer");


//format the inquirer
let answer = function inqQuestion(nameInput, typeInput, messageInput) {
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


module.exports = answer;