#! /usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";


console.log(chalk.blue.bold("\n \tWelcome to codeWithNida - Currency Converter.\n"))

// Define the list of currencies and their exchange rates,
 let exchange_rate :any = {
    "USD":1,   // Base currency.
    "EUR":0.9, // European Currency(Euro).
    "JYP":113, // Japanese Currency(Yen).
    "CAD":1.3, // Canadian Dollar.
    "AUD":1.65,// Austrailian Dollar.
    "PKR":277.70  // Pakistani rupees.
    // Add more currencies and their exchange rates here.
 }

 // Prompt the user to select currencies to convert from and to.
 let user_answer = await inquirer.prompt([
    {
        name:"from_currency",
        type:"list",
        message:chalk.redBright.underline("Select the currency to convert from:"),
        choices:["USD","EUR","JYP","CAD","AUD","PKR"]
    },
    {
        name:"to_currency",
        type:"list",
        message:chalk.redBright.underline("Select the currency to convert into:"),
        choices:["USD","EUR","JYP","CAD","AUD","PKR"]
    },
    {
        name:"amount",
        type:"input",
        message:chalk.redBright.underline("Enter the amount to convert:")
    }
 ])

 // Perform currency conversion by using formula
let from_amount = exchange_rate[user_answer.from_currency];
let to_amount = exchange_rate[user_answer.to_currency];
let amount = user_answer.amount

 //Formula of conversion.
 let base_amount = amount / from_amount;
 let converted_amount = base_amount * to_amount;
 

 // Displaying the converted amount.
 console.log(chalk.green.bold(`Converted Amount = ${converted_amount.toFixed(2)}`));

