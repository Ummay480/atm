#!/usr/bin/env node

import inquirer from "inquirer";

let myBalance = 10000;
let myPin = 1234;
let pinAnswer = await inquirer.prompt([
    {
        name: "pin",
        message: "enter your pin",
        type: "number"
    }
]);

if (pinAnswer.pin === myPin) {
    console.log("Correct Pin Code!!!");

    let operationAns = await inquirer.prompt([
        {
            name:"operation",
            message: "please select option",
            type: "list",
            choices: ["withdraw", "check balance", "fast cash"]
        }
    ]);
    
    console.log(operationAns);
    
    if (operationAns.operation === "withdraw") {
        let amountAns = await inquirer.prompt([
            {
                name: "amount",
                message: "enter your amount",
                type: "number"
            }
        ]);
    
      if (myBalance < amountAns.amount){
        console.log("You have insufficient Balance")
      }
      else {
        myBalance -= +amountAns.amount
        console.log(amountAns.amount + "Withdraw Successfully")
        console.log("Your Remaining Balance is " + myBalance); 
           }
        
           } 
    
    if (operationAns.operation === "fast cash") {
        let fastCashAns = await inquirer.prompt([
            {
                name: "fastCash",
                message: "Select your amount",
                type: "list",
                choices: ["1000", "2000", "5000", "10000"]
            }
        ]);
        
        myBalance -= +fastCashAns.fastCash;
        console.log(fastCashAns.fastCash + " Withdraw Successfully");
        console.log("Your Remaining Balance is " + myBalance);      
    } 
    else if (operationAns.operation === "check balance") {
        console.log("Your Balance Is: " + myBalance);
    }
} else {
    console.log("Incorrect Pin number");
}
