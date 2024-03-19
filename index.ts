//project 2

// build a simple caculator by using inquirer with prompt
import inquirer from "inquirer";
const answer = await inquirer.prompt([
    { message: "Enter a firstNumber :", type: "number", name: "firstNumber" },
    { message: "Enter a secondNumber :", type: "number", name: "secondNumber"},
    { message: "select any one operator:",
     type: "list", 
     name: "operator",
    choices: ["Divison", "Multiplication", "Adition", "Subtraction"],
    },
]);

//using if else chain to perform opertor based on conditions
if(answer.operator === "Divison"){
    console.log(`the answer is: ${answer.firstNumber / answer.secondNumber}`);
} else if(answer.operator === "Multiplication"){
    console.log(`the answer is: ${answer.firstNumber * answer.secondNumber}`);
} else if(answer.operator === "Adition"){
    console.log(`the answer is: ${answer.firstNumber + answer.secondNumber}`);
} else if(answer.operator === "Subtraction"){
    console.log(`the answer is: ${answer.firstNumber - answer.secondNumber}`);
} else{
    console.log("select valid operator");
}