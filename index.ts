#! /usr/bin/env node

import inquirer from "inquirer";
import chalk from "chalk";

console.log(chalk.blue.bold("\n wellcome to 'code with shifa-currency cunvertor' \n"));

// define list of currencies and their exchange rates
let exchange$rate:any = {
    "USD": 1,
    "EUR": 0.9,
    "JYP": 161.83,
    "CAD": 1.37,
    "AUD": 1.50,
    "PKR": 277.61,
}

// prompt the user select currencies to convert from and to
let user$answer = await inquirer.prompt([
    {
        name: "from_currency",
        type: "list",
        message: "sSelect the currency to convert from",
        choices: ["USD", "EUR", "JYP", "CAD", "AUD", "PKR"]

    },
    {
        name: "to_currency",
        type: "list",
        message: "Select the currency to convert into",
        choices: ["USD", "EUR", "JYP", "CAD", "AUD", "PKR"]

    },
    {
    name: "amount",
    type: "input",
    message: "Enter the amount to convert",
    }
]);

// perform currency conversion via formula
let from$amount = exchange$rate[user$answer.from_currency];
let to$amount = exchange$rate[user$answer.to_currency];
let amount = user$answer.amount

//  conversion formula
let base$amount = amount / from$amount
let converted$amount = base$amount * to$amount

// display the converted amount
console.log(`convered amount = ${chalk.greenBright(converted$amount.toFixed(2))}`);
