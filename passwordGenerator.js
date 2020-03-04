class Password {
    constructor(pwlength, uppercase, lowercase, numbers, special, passwordString) {
        this.pwlength = pwlength;
        this.uppercase = uppercase;
        this.lowercase = lowercase;
        this.numbers = numbers;
        this.special = special;
        this.passwordString = passwordString;
    }

  

    generatePassword(pwlength, uppercase, lowercase, numbers, special, passwordString) {
        console.log("I am in the generatePasswordFunction");
        let choiceArray = [uppercase, lowercase, numbers, special];
        console.log(choiceArray);
        let mathArray = [
            String.fromCharCode(Math.floor(Math.random() * (90 - 65 + 1)) + 65),
            String.fromCharCode(Math.floor(Math.random() * (122 - 97 + 1)) + 97),
            String.fromCharCode(Math.floor(Math.random() * (57 - 48 + 1)) + 48),
            String.fromCharCode(Math.floor(Math.random() * (47 - 38 + 1)) + 38)
        ];
        let type = (Math.floor(Math.random() * 4) + 0);
        console.log(passwordString);

        if (choiceArray[type]) {
            passwordString = passwordString + mathArray[type]
        }
        if (passwordString.length < pwlength) {
            generatePassword();
        } else {
            console.log(chalk.bold.yellow(""));
            console.log(chalk.bold.yellow(`               Here is your password:`));
            console.log(chalk.bold.yellow(""));
            console.log(chalk.bold.red(`            ${passwordString}`));
        }

    }
}

    module.exports = Password;
