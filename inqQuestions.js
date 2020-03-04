class Questions {

    constructor() {

    };

    askQuestion() {
        return inquirer.prompt([{
                type: "number",
                message: `
        How long would you like your password to be (8 to 128 characters)?`,
                name: "length",
                default: "8"
            },
            {
                type: "confirm",
                message: `
        Would you like Upper Case letters`,
                name: "uppercase"
            },
            {
                type: "confirm",
                message: `
        Would you like lower Case letters`,
                name: "lowercase"
            },
            {
                type: "confirm",
                message: `
        Would you like numbers`,
                name: "numbers"
            },
            {
                type: "confirm",
                message: `
        Would you like Special Characters ($%%#)?`,
                name: "special"
            },
        ])
    }
}


module.exports = Questions;